import './App.css';
import axios from "axios";
import { Navbar } from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home, Agenda, Triagem, Alunos, Anamnese } from "./components/pages"
import { Topbar } from './components/topbar/topbar';
import { TelaInicial } from './components/inicio/Inicio';
import { LoginResponsavel } from './components/login/loginParent';
import { InicioMobile } from './components/inicio/Mobile';

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

    <Topbar/>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Agenda" element={<Agenda />} />
      <Route path="/Triagem" element={<Triagem />} />
      <Route path="/Alunos" element={<Alunos />} />
      <Route path="/Anamnese" element={<Anamnese />} />
    </Routes>
    </div>
    
    const responsavel = <LoginResponsavel/>
    const mobile = <InicioMobile/>

  return (
    //telaLogin
    system
    //responsavel
    //mobile
  )

}

export default App
