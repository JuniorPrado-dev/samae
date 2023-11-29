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
export async function postTeacher (req:Request, res:Response){
     try {
       const { nome, cpf, senha, nascimento, email, telefone, idInstituicao, sexo } = req.body;
   
       if (!nome || !cpf || !senha || !nascimento || !email || !telefone || !idInstituicao || !sexo) {
         return res.send("Informe todos os campos obrigatórios");
       }
   
       const id_instituicao = idInstituicao;

       await connection('tbprofessor').insert({
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


   
//função para alterar o registro de um professor
export async function putTeacher(req: Request, res: Response) {
  try {
    const { id_professor } = req.params;
    const { nome, cpf, senha, nascimento, email, telefone, idInstituicao, sexo } = req.body;

    if (!id_professor || !nome || !cpf || !senha || !nascimento || !email || !telefone || !idInstituicao || !sexo) {
      return res.status(400).send("Informe todos os campos obrigatórios");
    }

    const id_instituicao = idInstituicao;

    // Verifica se o professor com o ID fornecido existe antes de tentar atualizar
    const professorExistente = await connection('tbprofessor').where('id_professor', id_professor).first();

    if (!professorExistente) {
      return res.status(404).send("Professor não encontrado");
    }

    await connection('tbprofessor').where('id_professor', id_professor).update({
      nome,
      cpf,
      senha,
      nascimento,
      email,
      telefone,
      id_instituicao,
      sexo,
    });

    return res.send("Os dados foram atualizados com sucesso!");
  } catch (error) {
    console.error(error);
    return res.send("Erro interno do servidor");
  }
}



//função para deletar registro de um professor
export async function deleteTeacher(req: Request, res: Response) {
  try {
    const { id_professor } = req.params; 


    // Verifica se o professor com o ID fornecido existe antes de tentar excluir
    const professorExistente = await connection('tbprofessor').where('id_professor', id_professor).first();

    if (!professorExistente) {
      return res.send("Professor não encontrado");
    }

    await connection('tbprofessor').where('id_professor', id_professor).del();

    return res.send("O professor foi excluído com sucesso!");
  } catch (error) {
    console.error(error);
    return res.send("Erro interno do servidor");
  }
}



   
   

