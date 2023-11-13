import './App.css';
import axios from "axios";
import { Navbar } from './components/Navbar/Navbar';
import { Route, Routes, Link } from 'react-router-dom';
import { Home, Agenda, Triagem, Alunos, Anamnese } from "./components/pages"
import { Topbar } from './components/topbar/topbar';
import { TelaInicial } from './components/inicio/Inicio';
import { LoginP } from './components/login/loginTeacher';
import { InicioMobile } from './components/mobile/Mobile';

function App() {

  const myId = 1;

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

    const telaLogin = <div id="pagLogin">
      <TelaInicial/>
    </div>

    const system = <div className='App'>
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
  
    const mobile = <InicioMobile/>

  return (
    //telaLogin
    //mobile
    system
  )

}

export default App