//imports essenciais
import express, { Request, Response } from "express";
import connection from "../database/connection"

//função de listagem
export async function getStudents(req:Request, res:Response){
    const id = req.query.id
    console.log(id)
    if (!id) {
       return res.send("Informe o Id")
    }

    const aluno = await connection('tbaluno').where('id_aluno', id)
    if (aluno.length < 1) {
       return res.send('aluno não encontrado')
    }else{
       return res.send(aluno)
    }
}

//função do formulário de cadastro
export async function postSignUpStudent (req:Request, res:Response){



}