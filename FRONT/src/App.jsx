import './App.css';
import axios from "axios";
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home, Agenda, Triagem, Alunos, Anamnese } from "./components/pages"
import { Login } from './components/login/login';

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
      <Login/>
    </div>

    const system = <div className='App'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Agenda" element={<Agenda />} />
      <Route path="/Triagem" element={<Triagem />} />
      <Route path="/Alunos" element={<Alunos />} />
      <Route path="/Anamnese" element={<Anamnese />} />
    </Routes>
    </div>

  return (
    //telaLogin
    system
  )

}

export default App
