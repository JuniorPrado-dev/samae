import React ,{ useEffect, useState } from 'react';
import axios from 'axios';

export const Alunos = () => {

  const [primeiroAluno, setPrimeiroAluno] = useState(null);
  useEffect(() => {
      axios.get('http://localhost:3003/all-students')
        .then((response) => {
          const dadosDoBanco = response.data;
          if (dadosDoBanco.length > 0) {
            setPrimeiroAluno(dadosDoBanco[0]); // Define o estado com os dados do primeiro aluno
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar dados dos alunos:", error);
        });
    }, []); // O array vazio faz com que o useEffect seja executado apenas uma vez, semelhante ao componentDidMount
  

/*
axios.get('http://localhost:3003/all-students')
  .then((response) => {

    const dadosDoBanco = response.data;

    console.log(dadosDoBanco[0].nome);
   const maria = dadosDoBanco[0];
    
  })
  .catch((error) => {
    return "erro erro errro";
  });*/




    return <div>
  
    

  <h1>Alunos</h1>
      {primeiroAluno ? (
        <p>Nome do primeiro aluno: {primeiroAluno.nome}</p>
      ) : (
        <p>Nenhum aluno encontrado</p>
      )}





    </div>;
};
