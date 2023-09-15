import './App.css';
import axios from "axios";
import { useForm } from "./hooks/useForm";
import Cadastrar from './components/formcdaluno';

function App() {

  return <>
    <Cadastrar />
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/Triagem" element={<Triagem />} />
        <Route path="/Alunos" element={<Alunos />} />
        <Route path="/Anamnese" element={<Anamnese />} />
      </Routes>
    </div>
  </>
}
export default App
