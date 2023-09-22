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
       return res.send(aluno[0].nome)
    }
}

//função do formulário de anamnese
export async function postSignUpStudent (req:Request, res:Response){
   try {
      const { nome, sexo, nascimento, religiao } = req.body;
      const { am_p1, am_p2, am_p3} = req.body;
      const {ap_p1, ap_p2, ap_p3, ap_p4} = req.body;
      const {a_p1} = req.body;
      const {d_p1, d_p2, d_p3, d_p4, d_p5, d_p6, d_p7, d_p8, d_p9, d_p10, d_p11, d_p12, d_p13, d_p14} = req.body;
      const {medidas, contrariado, saude, acompanhamento, apoio} = req.body;  
      const {h_p1, h_p2, h_p3, h_p4, h_p5, h_p6, h_p7, h_p8, h_p9, h_p10} = req.body;




  
      if (!nome || !sexo || !nascimento || !religiao || !am_p1 || !am_p2 || !am_p3 || !ap_p1 || !ap_p2 || !ap_p3 || !ap_p4 || !a_p1 || 
         !d_p1 || !d_p2 || !d_p3 || !d_p4 || !d_p5 || !d_p6 || !d_p7 || !d_p8 || !d_p9 || !d_p10 || !d_p11 || !d_p12 || !d_p13 || !d_p14 ||
         !medidas || !contrariado || !saude || !acompanhamento || !apoio || !h_p1 || !h_p2 || !h_p3 || !h_p4 || !h_p5 || !h_p6 || !h_p7 || !h_p8 || !h_p9 || !h_p10) {
        return res.send('Informe todos os campos obrigatórios');
      }
  
      const id = await connection('tbaluno_anamnese').insert({
        nome,
        sexo,
        nascimento,
        religiao,
      });

        

      const idAluno = await connection('tbaluno_anamnese').where('nome', nome).where('sexo', sexo)
      .where('nascimento', nascimento).where('religiao', religiao);

      
    const id_aluno = idAluno[0].id_aluno;
  


      const am = await connection('tbaspectos_motores_anamnese').insert({
        id_aluno, 
        am_p1,
         am_p2,
         am_p3,
       });


       const ap = await connection('tbaspectos_perceptivos_anamnese').insert({
         id_aluno,
         ap_p1,
         ap_p2,
         ap_p3,
         ap_p4,
       });


       const a = await connection('tbatitudes_anamnese').insert({
        id_aluno, 
        a_p1,
      
       });


       const d = await connection('tbdados_anamnese').insert({
         id_aluno, d_p1, d_p2, d_p3, d_p4, d_p5, d_p6, d_p7, d_p8, d_p9, d_p10, d_p11, d_p12, d_p13, d_p14,
      
       });


       const f = await connection('tbfinal_anamnese').insert({
         id_aluno, medidas, contrariado, saude, acompanhamento, apoio,
      
       });


       const h = await connection('tbhistorico_anamnese').insert({
         id_aluno, h_p1, h_p2, h_p3, h_p4, h_p5, h_p6, h_p7, h_p8, h_p9, h_p10,
      
       });


  
       return res.send("Os dados foram enviados com sucesso!");
    } catch (error) {
      console.error(error);
      return res.send('Erro interno do servidor');
    }
}

//função de triagem do aluno
export async function triagemStudent (req:Request ,res:Response) {
  try{

     const idAluno = req.body;
     const {n1_n1, n1_n2, n1_n3, n1_n4, n1_n5, n1_n6, n1_n7, n1_n8, n1_n9, n1_n10, n1_n11} = req.body;
     const {n2_n1, n2_n2, n2_n3, n2_n4} = req.body;
     const {n3_n1, n3_n2, n3_n3, n3_n4} = req.body;
     const {n4_n1, n4_n2, n4_n3, n4_n4} = req.body;
     const {mt_n1, mt_n2, mt_n3, mt_n4, mt_n5, mt_n6, mt_n7, mt_n8, mt_n9, mt_n10, mt_n11} = req.body;
     const {hc_n1, hc_n2, hc_n3, hc_n4, hc_n5, hc_n6, hc_n7, hc_n8, hc_n9, hc_n10, hc_n11, hc_n12, hc_n13, hc_n14, hc_n15, hc_n16, hc_n17} = req.body;
  
    if(!n1_n1 || !n1_n2 || !n1_n3 || !n1_n4 || !n1_n5 || !n1_n6 || !n1_n7 || !n1_n8 || !n1_n9 || !n1_n10 || !n1_n11 || !n2_n1 || !n2_n2 || !n2_n3 || !n2_n4 || !n3_n1 || !n3_n2 || !n3_n3 || !n3_n4 || !n4_n1 || !n4_n2 || !n4_n3 || !n4_n4 ||
      !mt_n1 || !mt_n2 || !mt_n3 || !mt_n4 || !mt_n5 || !mt_n6 || !mt_n7 || !mt_n8 || !mt_n9 || !mt_n10 || !mt_n11 || !hc_n1 || !hc_n2 || !hc_n3 || !hc_n4 || !hc_n5 || !hc_n6 || !hc_n7 || !hc_n8 || !hc_n9 || !hc_n10 || !hc_n11 || !hc_n12 || !hc_n13 || !hc_n14 || !hc_n15 || !hc_n16 || !hc_n17){
      return res.send("Informe todos os dados obrigatórios")
    }

      const id_aluno = idAluno;

    const n1 = await connection('tbtriagem_n1').insert({
       id_aluno, n1_n1, n1_n2, n1_n3, n1_n4, n1_n5, n1_n6, n1_n7, n1_n8, n1_n9, n1_n10, n1_n11
    })

    const n2 = await connection('tbtriagem_n2').insert({
      id_aluno, n2_n1, n2_n2, n2_n3, n2_n4
    })

    const n3 = await connection('tbtriagem_n3').insert({
      id_aluno, n3_n1, n3_n2, n3_n3, n3_n4
    })

    const n4 = await connection('tbtriagem_n4').insert({
      id_aluno, n4_n1, n4_n2, n4_n3, n4_n4
    })

    const n5 = await connection('tbtriagem_matematica').insert({
      mt_n1, mt_n2, mt_n3, mt_n4, mt_n5, mt_n6, mt_n7, mt_n8, mt_n9, mt_n10, mt_n11
    })

    const n6 =await connection('tbtriagem_habilidades').insert({
      id_aluno, hc_n1, hc_n2, hc_n3, hc_n4, hc_n5, hc_n6, hc_n7, hc_n8, hc_n9, hc_n10, hc_n11, hc_n12, hc_n13, hc_n14, hc_n15, hc_n16, hc_n17
    })

    return res.send("Os dados foram enviados com sucesso!");







      return res.send("deu tudo certo!")
  } catch (error) {
      console.error(error);
      return res.send('Erro interno do servidor');
    }
}