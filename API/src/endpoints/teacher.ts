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
   
}