//imports essenciais
import express, { Request, Response } from "express";
import connection from "./database/connection";
import { getTeacher, postSignUpTeacher, loginTeacher } from "./endpoints/teacher";
import { postAgendTeacher, getAgendTeacher, putAgendTeacher, deleteAgendTeacher } from "./endpoints/agend";
import { getStudents, postSignUpStudent, triagemStudent } from "./endpoints/student";
import { getParents } from "./endpoints/parents";
import cors from "cors";

//variavel pro express 
const app = express() //variavel pro express 
app.use(cors()) //express usar o cors 
app.use(express.json()) //express usar o json


//teacher endpoints
app.get("/teacher", getTeacher) //listar professor específico
app.post("/sign-up-teacher", postSignUpTeacher) //cadastrar um novo professor
app.post("/login-teacher", loginTeacher) // login do professor

//agend endpoints
app.get("/get-agend-teacher", getAgendTeacher) // listar todos os registros da agenda
app.post("/post-agend-teacher", postAgendTeacher) //guardar os dados da agenda
app.put("/put-agend-teacher", putAgendTeacher) //atualizar um registro da agenda
app.delete("/delete-agend-teacher", deleteAgendTeacher) // deletar um registro da agenda


//student endpoints
app.get("/get-students", getStudents) //listar alunos
app.post("/sign-up-student", postSignUpStudent) //registrar anamnese do aluno
app.post("/triagem-student", triagemStudent) //registrar triagem do aluno 


//parents endpoints
app.get("/parent", getParents) //get para todos responsáveis

//institution endpoints

//definindo porta e mensagem de teste para rodar
app.listen(3003, () =>{
    console.log('Servidor rodando na porta 3003')
});