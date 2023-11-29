//imports essenciais
import express, { Request, Response } from "express";
import connection from "./database/connection";
import { getTeacher, postTeacher, loginTeacher, putTeacher, deleteTeacher } from "./endpoints/teacher";
import { postAgend, getAgend, putAgend, deleteAgend } from "./endpoints/agend";
import { getStudents, postAnamnese, getAnamnese, putAnamnese, deleteAnamnese} from "./endpoints/student";
import { postTriagem, getTriagem, putTriagem, deleteTriagem } from "./endpoints/triagem"
import { getParents } from "./endpoints/parents";
import cors from "cors";

//variavel pro express 
const app = express() //variavel pro express 
app.use(cors()) //express usar o cors 
app.use(express.json()) //express usar o json


//teacher endpoints
app.get("/teacher", getTeacher) //listar professor específico
app.post("/sign-up-teacher", postTeacher) //cadastrar um novo professor
app.post("/login-teacher", loginTeacher) // login do professor
app.put("/put-teacher", putTeacher) // alterar o registro de um professor
app.delete("/delete-teacher", deleteTeacher) //deletar um registro de professor

//agend endpoints
app.get("/get-agend/:id", getAgend) // listar todos os registros da agenda
app.post("/post-agend", postAgend) //guardar os dados da agenda
app.put("/put-agend/:id", putAgend) //atualizar um registro da agenda
app.delete("/delete-agend/:id", deleteAgend) // deletar um registro da agenda


//student and anamnese endpoints
app.get("/get-students", getStudents) //listar alunos
app.post("/post-anamnese", postAnamnese) //registrar anamnese do aluno
app.get("/get-anamnese/:id", getAnamnese) //mostrar anamnese do aluno
app.put("/put-anamnese/:id", putAnamnese) //atualizar anamnese
app.delete("/delete-anamnese:id", deleteAnamnese) //deletar registro de anamnese

//triagem endpoints
app.post("/post-triagem", postTriagem) //registrar triagem do aluno 
app.get("/get-triagem", getTriagem) //mostrar triagem do aluno
app.put("/put-triagem", putTriagem) //atualizar triagem
app.delete("/delete-triagem", deleteTriagem) //deletar registro de triagem


//parents endpoints
app.get("/parent", getParents) //get para todos responsáveis

//institution endpoints

//definindo porta e mensagem de teste para rodar
app.listen(3003, () =>{
    console.log('Servidor rodando na porta 3003')
});