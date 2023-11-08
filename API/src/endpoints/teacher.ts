//imports essenciais
import express, { Request, Response } from "express";
import connection from "../database/connection"
import jwt from 'jsonwebtoken';

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
    const {cpf, senha} = req.body;

    if(!cpf || !senha){
      return res.send("Informe todos os campos obrigatórios");
    }
    const loginprof = await connection('tbprofessor').where('cpf', cpf).first();

    if (!loginprof){
      return res.send("Professor não está registrado");
    }

    if (loginprof.senha !== senha) {
      return res.send("Senha incorreta")
    } else {
      const payload = { userId: loginprof.id_professor, username: loginprof.nome};
      const token = jwt.sign(payload, 'segredo', {expiresIn: '1h'});

      return res.json({ token });
    }
       
      }catch (error) {
        return res.send("Erro no servidor");
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


   //função da agenda do professor inserir dados
   export async function postAgendTeacher (req:Request, res:Response) {
    try{
      const {nome, hora} = req.body

      if(!nome || !hora ) {
        return res.send("Informe os dados obrigatórios")
      }

    const ins = await connection('tbagenda').insert({
      nome, hora,
    })

    return res.send("Os dados foram enviados com sucesso")


    }catch(error){
      return res.send("erro no servidor")
    }
   }
   

