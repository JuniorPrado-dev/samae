import express, { Request, Response } from "express";
import connection from "../database/connection"

//função para inserir na agenda
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
      return res.send("Erro interno do servidor")
    }
   }

   //função para listar a agenda
   export async function getAgendTeacher (req:Request, res:Response) {
    try{
        const agenda = await connection('tbagenda')
        if (agenda.length < 1){
            return res.send("A tabela está vazia")
        }else{
            return res.send(agenda)
        }
    }catch(error){
        return res.send("Erro interno do servidor")
    }
   }

