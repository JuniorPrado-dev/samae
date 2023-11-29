import './App.css';
import axios from "axios";
import { useMediaQuery } from 'react-responsive';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home, Agenda, Triagem, Alunos, Anamnese } from "./components/pages"
import { createGlobalStyle } from 'styled-components';
import { Topbar } from './components/topbar/topbar';
import { TelaInicial } from './components/inicio/Inicio';
import { LoginResponsavel } from './components/login/loginParent';
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

    const GlobalStyle = createGlobalStyle`
      @import url('https://fonts.googleapis.com/css2?family=REM:ital,wght@0,300;0,700;1,300&display=swap');
    `;

    const system = <div className='App'>
    <GlobalStyle />
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

    const ReturnLogin = () => {
      const desktopLaptop = useMediaQuery({ minDeviceWidth: 600 });
      const isMobile = useMediaQuery({ maxDeviceWidth: 600 });
    
      return (
        <div>
          {desktopLaptop && <TelaInicial/>}
          {isMobile && <InicioMobile />}
        </div>
      );
    };
  return (
    system
    //<ReturnLogin/>
  )

}

export default App
