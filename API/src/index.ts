//imports essenciais
import express, { Request, Response } from "express";
import connection from "./database/connection";
import { getTeacher } from "./endpoints/teacher";
import { postSignUpTeacher } from "./endpoints/teacher";
import {loginTeacher} from "./endpoints/teacher";
import { postAgendTeacher } from "./endpoints/teacher";
import { getStudents } from "./endpoints/student";
import { postSignUpStudent } from "./endpoints/student";
import {triagemStudent} from "./endpoints/student";
import { getParents } from "./endpoints/parents";
import cors from "cors";

//variavel pro express 
const app = express() //variavel pro express 
app.use(cors()) //express usar o cors 
app.use(express.json()) //express usar o json


//teacher endpoints
app.get("/teacher", getTeacher) //listar todos professores
app.post("/sign-up-teacher", postSignUpTeacher) //enviar do front para o bd
app.post("/login-teacher", loginTeacher) // login do professor
app.post("/post-agend-teacher", postAgendTeacher) //guardar os dados da agenda

//student endpoints
app.get("/student", getStudents) //listar todos alunos
app.post("/sign-up-student", postSignUpStudent) //enviar do front para o bd
app.post("/triagem-student", triagemStudent) //enviar do front para o bd
//parents endpoints
app.get("/parent", getParents) //get para todos responsáveis

//institution endpoints

//definindo porta e mensagem de teste para rodar
app.listen(3003, () =>{
    console.log('Servidor rodando na porta 3003')
});