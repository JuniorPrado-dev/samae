//imports essenciais
import express, { Request, Response } from "express";
import connection from "./database/connection"
import { getTeacher } from "./endpoints/teacher";
import { postSignUpTeacher } from "./endpoints/teacher";
import { getStudents } from "./endpoints/student";
import { postSignUpStudent } from "./endpoints/student";
import { getParents } from "./endpoints/parents";

//variavel pro express 
const app = express()

//teacher endpoints
app.get("/all-teacher", getTeacher) //listar todos professores
app.post("/sign-up-teacher", postSignUpTeacher) //enviar do front para o bd

//student endpoints
app.get("/all-student", getStudents) //listar todos alunos
app.post("/sign-up-student", postSignUpStudent) //enviar do front para o bd

//parents endpoints
app.get("/all-parent", getParents) //get para todos responsáveis

//institution endpoints

//definindo porta e mensagem de teste para rodar
app.listen(3003, () =>{
    console.log('Servidor rodando na porta 3003')
});