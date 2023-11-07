//imports essenciais
import express, { Request, Response } from "express";
import connection from "../database/connection"

//função de listagem
export async function getTeacher(req:Request, res:Response){
    const id = req.query.id;
    console.log(id)
    if (!id) {
       return res.send("Informe o Id")
    }

    const professor = await connection('tbprofessor').where('id_professor', id)
    if (professor.length < 1) {
       return res.send("Professor não encontrado")
    }else{
       return res.send(professor)
    }
}

//função de login do professor
export async function loginTeacher(req:Request, res:Response){

  try{
    const {email, senha} = req.body;

    if(!email || !senha){
      return res.send("Informe todos os campos obrigatórios");
    }
    const loginprof = await connection('tbprofessor').where('email', email).where('senha', senha);
        if(loginprof.length < 1) {
          return res.send("Seu login foi negado")
        }else{
          return res.send("Login feito com sucesso!")
        }
      }catch (error) {
        return res.send("erro no servidor");
      }

}

//função do formulário de cadastro
export async function postSignUpTeacher (req:Request, res:Response){
     try {
       const { nome, cpf, senha, nascimento, email, telefone, idInstituicao, sexo } = req.body;
   
       if (!nome || !cpf || !senha || !nascimento || !email || !telefone || !idInstituicao || !sexo) {
         return res.send("Informe todos os campos obrigatórios");
       }
   
       const id_instituicao = idInstituicao;

       const [id] = await connection('tbprofessor').insert({
         nome,
         cpf,
         senha,
         nascimento,
         email,
         telefone,
         id_instituicao,
         sexo,
       });
   
       return res.send("Os dados foram enviados com sucesso!");
     } catch (error) {
       console.error(error);
       return res.send("Erro interno do servidor");
     }
   }


   
   

