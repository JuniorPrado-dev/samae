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

    const aluno = await connection('tbaluno_anamnese').where('id_aluno', id)
    if (aluno.length < 1) {
       return res.send('aluno não encontrado')
    }else{
       return res.send(aluno)
    }
}

//função do formulário de cadastro
export async function postSignUpStudent (req:Request, res:Response){
   try {
      const { nome, sexo, nascimento, religiao } = req.body;
      const { am_p1, am_p2, am_p3} = req.body;
      const {ap_p1, ap_p2, ap_p3, ap_p4} = req.body;
      const {a_p1} = req.body;
      const {d_p1, d_p2, d_p3, d_p4, d_p5, d_p6, d_p7, d_p8, d_p9, d_p10, d_p11, d_p12, d_p13, d_p14} = req.body;
      const {f_p1, f_p2, f_p3, f_p4, f_p5, f_p6} = req.body;
      const {h_p1, h_p2, h_p3, h_p4, h_p5, h_p6, h_p7, h_p8, h_p9, h_p10} = req.body;




  
      if (!nome || !sexo || !nascimento || !religiao || !am_p1 || !am_p2 || !am_p3 || !ap_p1 || !ap_p2 || !ap_p3 || !ap_p4 || !a_p1 || 
         !d_p1 || !d_p2 || !d_p3 || !d_p4 || !d_p5 || !d_p6 || !d_p7 || !d_p8 || !d_p9 || !d_p10 || !d_p11 || !d_p12 || !d_p13 || !d_p14 ||
         !f_p1 || !f_p2 || !f_p3 || !f_p4 || !f_p5 || !f_p6 || !h_p1 || !h_p2 || !h_p3 || !h_p4 || !h_p5 || !h_p6 || !h_p7 || !h_p8 || !h_p9 || !h_p10) {
        return res.send('Informe todos os campos obrigatórios');
      }
  
      const [id] = await connection('tbaluno_anamnese').insert({
        nome,
        sexo,
        nascimento,
        religiao,
      });


      const [id1] = await connection('tbaspectos_motores_anamnese').insert({
        id_aluno: id, 
        am_p1,
         am_p2,
         am_p3,
       });


       const [id2] = await connection('tbaspectos_perceptivos_anamnese').insert({
         id_aluno: id,
         ap_p1,
         ap_p2,
         ap_p3,
         ap_p4,
       });


       const [id3] = await connection('tbatitudes_anamnese').insert({
        id_aluno: id, 
        a_p1,
      
       });


       const [id4] = await connection('tbdados_anamnese').insert({
         id_aluno: id, d_p1, d_p2, d_p3, d_p4, d_p5, d_p6, d_p7, d_p8, d_p9, d_p10, d_p11, d_p12, d_p13, d_p14,
      
       });


       const [id5] = await connection('tbfinal_anamnese').insert({
         id_aluno: id, f_p1, f_p2, f_p3, f_p4, f_p5, f_p6,
      
       });


       const [id6] = await connection('tbhistorico_anamnese').insert({
         id_aluno: id, h_p1, h_p2, h_p3, h_p4, h_p5, h_p6, h_p7, h_p8, h_p9, h_p10,
      
       });







       






  
      return res.json("deu certo!");
    } catch (error) {
      console.error(error);
      return res.send('Erro interno do servidor');
    }
}