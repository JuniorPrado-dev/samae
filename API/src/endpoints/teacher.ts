//imports essenciais
import express, { Request, Response } from "express";
import connection from "../database/connection"

//função de listagem
export async function getTeacher(req:Request, res:Response){
    const id = req.query.id
    console.log(id)
    if (!id) {
       return res.send("Informe o Id")
    }

    const professor = await connection('tbprofessor').where('id_professor', id)
    if (professor.length < 1) {
       return res.send('Professor não encontrado')
    }else{
       return res.send(professor)
    }
}

//função do formulário de cadastro
export async function postSignUpTeacher (req:Request, res:Response){
     try {
       const { nome, cpf, senha, nascimento, email, telefone, id_instituicao, sexo } = req.body;
   
       if (!nome || !cpf || !senha || !nascimento || !email || !telefone || !id_instituicao || !sexo) {
         return res.send('Informe todos os campos obrigatórios');
       }
   
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
   
       return res.json({ id, nome, cpf, nascimento, email, telefone, id_instituicao, sexo });
     } catch (error) {
       console.error(error);
       return res.send('Erro interno do servidor');
     }
   }
   

