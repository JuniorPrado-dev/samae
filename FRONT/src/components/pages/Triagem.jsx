import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const Triagem = () => {
  const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
        checkbox8: false,
        checkbox9: false,
        checkbox10: false,
        checkbox11: false,
        checkbox12: false,
        checkbox13: false,
        checkbox14: false,
        checkbox15: false,
        checkbox16: false,
        checkbox17: false,
        checkbox18: false,
        checkbox19: false,
        checkbox20: false,
        checkbox21: false,
        checkbox22: false,
        checkbox23: false,
        checkbox24: false,
        checkbox25: false,
        checkbox26: false,
        checkbox27: false,
        checkbox28: false,
        checkbox29: false,
        checkbox30: false,
        checkbox31: false,
        checkbox32: false,
        checkbox33: false,
        checkbox34: false,
        checkbox35: false,
        checkbox36: false,
        checkbox37: false,
        checkbox38: false,
        checkbox39: false,
      });
    const [form, onChange, resetState ] = useForm({ 
      nome: '',
      data: '', 
      professor: '',
      psicopedagogo: '',
      recNum: '',
      escNum: ''
    })

    const handleCheckBoxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({
          ...checkboxes,
          [name]: checked,
        });
      };

    const [watcher,setWatcher] = useState('')

    const alter=(e)=>{
        setWatcher(e.target.value)
    }
        
  function send(e) {
      e.preventDefault()
      const aluno= {
        idAluno: form.nome,
        dataTriagem: form.data,
        idProfessor: form.professor,
        psicopedagogo: form.psicopedagogo,

      n1_n1: checkboxes.checkbox1,
      n1_n2: checkboxes.checkbox2,
      n1_n3: checkboxes.checkbox3,

      n2_n1: checkboxes.checkbox4,
      n2_n2: checkboxes.checkbox5,
      n2_n3: checkboxes.checkbox6,
      n2_n4: checkboxes.checkbox7,

      n3_n1: checkboxes.checkbox8,
      n3_n2: checkboxes.checkbox9,
      n3_n3: checkboxes.checkbox10,
      
      n4_n1: checkboxes.checkbox11,
      n4_n2: checkboxes.checkbox12,
      n4_n3: checkboxes.checkbox13,
      n4_n4: checkboxes.checkbox14,
      n4_n5: checkboxes.checkbox15,
      n4_n6: watcher, 
      
      mt_n1: checkboxes.checkbox16,
      mt_n2: checkboxes.checkbox17,
      mt_n5: form.recNum,
      mt_n6: form.escNum,
      mt_n7: checkboxes.checkbox18,
      mt_n8: checkboxes.checkbox19,
      mt_n9: checkboxes.checkbox20,
      mt_n10: checkboxes.checkbox21,
      mt_n11: checkboxes.checkbox22,
      mt_n12: checkboxes.checkbox23,
      mt_n13: checkboxes.checkbox24,

      hc_n1: checkboxes.checkbox25,
      hc_n2: checkboxes.checkbox26,
      hc_n3: checkboxes.checkbox27,
      hc_n4: checkboxes.checkbox28,
      hc_n5: checkboxes.checkbox29,
      hc_n6: checkboxes.checkbox30,
      hc_n7: checkboxes.checkbox31,
      hc_n8: checkboxes.checkbox32,
      hc_n9: checkboxes.checkbox33,
      hc_n10: checkboxes.checkbox34,
      hc_n11: checkboxes.checkbox35,
      hc_n12: checkboxes.checkbox36,
      hc_n13: checkboxes.checkbox37,
      hc_n14: checkboxes.checkbox38,
      hc_n15: checkboxes.checkbox39,
      }
      axios.post('http://localhost:3003/triagem-student', aluno)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); 
    }

return (
  <main>
    <form onSubmit={send}>
    <h1>Triagem Psicopedagógica</h1>
        <label>
          Aluno:
          <input type='text' name='nome' onChange={onChange} value={form.nome} />
        </label>
        <label>
          Data da Triagem:
          <input type='date' name='data' onChange={onChange} value={form.data} /><br />
        </label>
        <label>
          Professor:
          <input type="text" name='professor' onChange={onChange} value={form.professor} />
        </label>
        <label>
          Psicopedagogo:
          <input type="text" name='psicopedagogo' onChange={onChange} value={form.psicopedagogo} />
        </label><br /> <br />
        <h2>
                1. Leitura / Escrita
            </h2>
            <div>
            <h3>Nível 01:</h3>
            <label>
                Conhece Letras?
                <input
                    type="checkbox"
                    name="checkbox1"
                    checked={checkboxes.checkbox1}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Consegue descrever/relacionar imagens com coisas reais?
                <input
                    type="checkbox"
                    name="checkbox2"

                    checked={checkboxes.checkbox2}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Obtem êxito ao decodificar sílabas pausadamente?
                <input
                    type="checkbox"
                    name="checkbox3"

                    checked={checkboxes.checkbox3}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
    </div>

   
     <div>
        <h3>Nível 02:</h3>
        <label>
                Lê frases pausadamente?
                <input
                    type="checkbox"
                    name="checkbox4"

                    checked={checkboxes.checkbox4}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Necessita de intervenção na leitura?
                <input
                    type="checkbox"
                    name="checkbox5"

                    checked={checkboxes.checkbox5}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Escreve frases com a ausência de sílabas ou letras?
                <input
                    type="checkbox"
                    name="checkbox6"

                    checked={checkboxes.checkbox6}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Escreve frases pausadamente, porém de maneira correta?
                <input
                    type="checkbox"
                    name="checkbox7"

                    checked={checkboxes.checkbox7}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
        </div>

   
     <div>
        <h3>Nível 03:</h3>
            <label>
                Lê pausadamente o texto e apresenta dificuldade em explicar o que leu?
                <input
                    type="checkbox"
                    name="checkbox8"

                    checked={checkboxes.checkbox8}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Escreve pequenos textos com alguns erros ortográficos e pontuação inadequada?
                <input
                    type="checkbox"
                    name="checkbox9"

                    checked={checkboxes.checkbox9}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Escreve pequenos textos sem erros ortográficos e pontuação adequada?
                <input
                    type="checkbox"
                    name="checkbox10"

                    checked={checkboxes.checkbox10}
                    onChange={handleCheckBoxChange}
                />

            </label> <br />
        </div>

   
     <div>
        <h3>Nível 04:</h3>
        <label>
            Consegue ler com segurança?
                <input
                    type="checkbox"
                    name="checkbox11"

                    checked={checkboxes.checkbox11}
                    onChange={handleCheckBoxChange}
                />

            </label> <br />
            <label>
            Obedece os devidos sinais de pontuação?
                <input
                    type="checkbox"
                    name="checkbox12"

                    checked={checkboxes.checkbox12}
                    onChange={handleCheckBoxChange}
                />

            </label> <br />    
            <label>
            Ler com entonação adequada?
                <input
                    type="checkbox"
                    name="checkbox13"

                    checked={checkboxes.checkbox13}
                    onChange={handleCheckBoxChange}
                />

            </label> <br /> 
            <label>
            Produz pequenos textos e apresenta dificuldade na ascentuação?
                <input
                    type="checkbox"
                    name="checkbox14"

                    checked={checkboxes.checkbox14}
                    onChange={handleCheckBoxChange}
                />

            </label> <br /> 
            <label>
            Produz textos considerando gênero, título, sequência e pontuação adequada?
                <input
                    type="checkbox"
                    name="checkbox15"

                    checked={checkboxes.checkbox15}
                    onChange={handleCheckBoxChange}
                />

            </label> <br />
            <label>
                Qual o nível de escrita do aluno?
                <br />
                <input type="radio" name="alter" onChange={alter} value="Masculino" />
                <label htmlFor="triagem" className="alter">Pré-silábico - 01</label><br/>
                <input type="radio" name="alter" onChange={alter} value="Feminino" />
                <label htmlFor="triagem" className="alter">Pré-silábico - 02</label><br/>
                <input type="radio" name="alter" onChange={alter} value="Masculino" />
                <label htmlFor="triagem" className="alter">Silábico</label><br/>
                <input type="radio" name="alter" onChange={alter} value="Feminino" />
                <label htmlFor="triagem" className="alter">Silábico Alfabético</label><br/>
                <input type="radio" name="alter" onChange={alter} value="Feminino" />
                <label htmlFor="triagem" className="alter">Alfabético</label><br/>
            </label>
        </div><br />
        <h2>
                2. Matemática
            </h2>
            <div>
            <label>
                Compreende fundamentos básicos de quantidade e posição?
                <input
                    type="checkbox"
                    name="checkbox16"

                    checked={checkboxes.checkbox16}
                    onChange={handleCheckBoxChange}
                />
                <br />Ex: fino/grosso, cheio/vazio, dentro/fora
            </label> <br />
            <label>
                Reconhece números naturais?
                <input
                    type="checkbox"
                    name="checkbox17"

                    checked={checkboxes.checkbox17}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Reconhece números naturais até 
                <input type="number" name='recNum' onChange={onChange} value={form.recNum} />
            </label> <br />
            <label>
                Consegue escrever números naturais sequenciados até 
                <input type="number" name='escNum' onChange={onChange} value={form.escNum} />
            </label> <br />
            <label>
                Reconhece cores primarias e secundárias?
                <input
                    type="checkbox"
                    name="checkbox18"

                    checked={checkboxes.checkbox18}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Associa numeral e quantidade?
                <input
                    type="checkbox"
                    name="checkbox19"

                    checked={checkboxes.checkbox19}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Reconhece formas geométricas?
                <input
                    type="checkbox"
                    name="checkbox20"

                    checked={checkboxes.checkbox20}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Reconhece lateralidade?
                <input
                    type="checkbox"
                    name="checkbox21"

                    checked={checkboxes.checkbox21}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Possui noções de adição?
                <input
                    type="checkbox"
                    name="checkbox22"

                    checked={checkboxes.checkbox22}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Possui noções de subtração?
                <input
                    type="checkbox"
                    name="checkbox23"

                    checked={checkboxes.checkbox23}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Resolve problemas de adição e subtração?
                <input
                    type="checkbox"
                    name="checkbox24"

                    checked={checkboxes.checkbox24}
                    onChange={handleCheckBoxChange}
                />
            </label> <br /> <br />
            </div>


            <h2>
                3. Habilidades Comportamentais
            </h2>
            <div>
            <label>
                Interage com outros alunos?
                <input
                    type="checkbox"
                    name="checkbox25"

                    checked={checkboxes.checkbox25}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Brinca e obedece a comandos durante as brincadeiras e/ou as aulas?
                <input
                    type="checkbox"
                    name="checkbox26"

                    checked={checkboxes.checkbox26}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Assume postura defensiva quando necessário?
                <input
                    type="checkbox"
                    name="checkbox27"

                    checked={checkboxes.checkbox27}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Compartilha objetos com os colegas?
                <input
                    type="checkbox"
                    name="checkbox28"

                    checked={checkboxes.checkbox28}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Demonstra autoexpressão de modo adequado?
                <input
                    type="checkbox"
                    name="checkbox29"

                    checked={checkboxes.checkbox29}
                    onChange={handleCheckBoxChange}
                /> <br />
                Ex: sorrir para coisas felizes, chorar para coisa tristes
            </label> <br />
            <label>
                Apresenta comportamento pouco sociável
                <input
                    type="checkbox"
                    name="checkbox30"

                    checked={checkboxes.checkbox30}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Interage com o educador a partir das atividades propostas?
                <input
                    type="checkbox"
                    name="checkbox31"

                    checked={checkboxes.checkbox31}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Reconhece elogio como incentivo?
                <input
                    type="checkbox"
                    name="checkbox32"

                    checked={checkboxes.checkbox32}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Apresenta comportamentos sem motivo aparente?
                <input
                    type="checkbox"
                    name="checkbox33"

                    checked={checkboxes.checkbox33}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                É uma criança apática?
                <input
                    type="checkbox"
                    name="checkbox34"

                    checked={checkboxes.checkbox34}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Consegue contar relatos de modo sequenciado que faça sentido?
                <input
                    type="checkbox"
                    name="checkbox35"

                    checked={checkboxes.checkbox35}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                É uma criança inquieta e ansiosa?
                <input
                    type="checkbox"
                    name="checkbox36"

                    checked={checkboxes.checkbox36}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Possui a tendência de isolar de crianças e adultos?
                <input
                    type="checkbox"
                    name="checkbox37"

                    checked={checkboxes.checkbox37}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Demonstra picos de agressividade quando contrariada?
                <input
                    type="checkbox"
                    name="checkbox38"

                    checked={checkboxes.checkbox38}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Consegue se concentrar ao realizar uma atividade?
                <input
                    type="checkbox"
                    name="checkbox39"

                    checked={checkboxes.checkbox39}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            </div>
          <button type="submit">Enviar</button>
    </form>
  </main>
)
}