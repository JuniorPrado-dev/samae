import express, { Request, Response } from "express";
import connection from "../database/connection"

export async function getParents(req:Request, res:Response){
    const id = req.query.id
    console.log(id)
    if (!id) {
       return res.send("Informe o Id")
    }

    const responsavel = await connection('tbresponsavel').where('id_responsavel', id)
    if (responsavel.length < 1) {
       return res.send('Responsável não encontrado')
    }else{
       return res.send(responsavel)
    }
}