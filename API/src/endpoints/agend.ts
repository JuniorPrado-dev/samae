import express, { Request, Response } from "express";
import connection from "../database/connection"

//função para inserir na agenda
export async function postAgendTeacher (req:Request, res:Response) {
    try{
      const {id_professor, nome, hora, checkbox} = req.body

      if(!id_professor || !nome || !hora || !checkbox ) {
        return res.send("Informe os dados obrigatórios")
      }

    await connection('tbagenda').insert({
      id_professor, nome, hora, checkbox
    })

    return res.send("Os dados foram enviados com sucesso")


    }catch(error){
      return res.send("Erro interno do servidor")
    }
   }

   //função para listar a agenda
   export async function getAgendTeacher (req:Request, res:Response) {
    try{
      const id_professor = req.query.id_professor

        const agenda = await connection('tbagenda').where('id_professor', id_professor)

        if (agenda.length < 1){
            return res.send("A agenda está vazia")
        }else{
            return res.send(agenda)
        }
    }catch(error){
        return res.send("Erro interno do servidor")
    }
   }

   // Função para atualizar um registro na agenda
export async function putAgendTeacher(req: Request, res: Response) {
  try {
    const { id_professor, nome, hora, checkbox } = req.body;
    const id_agenda = req.params.id_agenda;

    if (!id_professor || !nome || !hora || !checkbox) {
      return res.send("Informe os dados obrigatórios");
    }

    const updateResult = await connection('tbagenda')
      .where('id_agenda', id_agenda)
      .update({ id_professor, nome, hora, checkbox });

    if (updateResult === 0) {
      return res.send("Registro não encontrado");
    }

    return res.send("Registro atualizado com sucesso");
  } catch (error) {
    return res.send("Erro interno do servidor");
  }
}

// Função para deletar um registro na agenda
export async function deleteAgendTeacher(req: Request, res: Response) {
  try {
    const id_agenda = req.params.id_agenda; 

    const deleteResult = await connection('tbagenda')
      .where('id_agenda', id_agenda)
      .del();

    if (deleteResult === 0) {
      return res.send("Registro não encontrado");
    }

    return res.send("Registro deletado com sucesso");
  } catch (error) {
    return res.send("Erro interno do servidor");
  }
}


