//imports essenciais
import express, { Request, Response, response } from "express";
import connection from "../database/connection"

//função de listagem
export async function getStudents(req:Request, res:Response){
    /*const id_professor = req.body  

    if (!id_professor) {
       return res.send("Você não tem permissão para acessar esses dados")
    }*/

    const aluno = await connection('tbaluno_anamnese') //.where('id_professor', id_professor)
    if (aluno.length < 1) {
       return res.send('Não há nenhum aluno registrado')
    }else{
       return res.send(aluno)
    }
}



//função do formulário de anamnese
export async function postSignUpStudent (req:Request, res:Response){
   try {
      const { nome, sexo, nascimento} = req.body;
      const {d_n1, d_n2, d_n3, d_n4, d_n5, d_n6, d_n7, d_n8, d_n9, d_n10, d_n11, d_n12, d_n13, d_n14} = req.body;
      const {h_n1, h_n2, h_n3, h_n4, h_n5, h_n6, h_n7, h_n8, h_n9, h_n10, h_n11, h_n12, h_n13} = req.body;
      const { am_n1, am_n2, am_n3} = req.body;
      const {ap_n1, ap_n2, ap_n3, ap_n4, ap_n5, ap_n6, ap_n7, ap_n8} = req.body;
      const {ae_n1, ae_n2, ae_n3, ae_n4, ae_n5, ae_n6} = req.body;
      const {s_n1, s_n2, s_n3, s_n4, s_n5, s_n6, s_n7, s_n8} = req.body;
      const {asp_n1, asp_n2, asp_n3, asp_n4, asp_n5, asp_n6, asp_n7} = req.body;
      const {sn_n1, sn_n2, sn_n3} = req.body;
      const {dc_n1, dc_n2, dc_n3} = req.body;
      const {sd_n1, sd_n2, sd_n3, sd_n4} = req.body;  
      


   console.log(req.body);
   

  /*
      if (!nome || !sexo || !nascimento || !d_n1 || !d_n2 || !d_n3 || !d_n4 || !d_n5 || !d_n6 || !d_n7 || !d_n8 || !d_n9 || !d_n10 || !d_n11 || !d_n12 || !d_n13 || !d_n14 || !h_n1 || !h_n2 || !h_n3 || !h_n4 || !h_n5 || !h_n6 || !h_n7 || !h_n8 || !h_n9 || !h_n10 || !h_n11 || !h_n12 || !h_n13 || !am_n1 || !am_n2 || !am_n3 || !ap_n1 || !ap_n2 || !ap_n3 || !ap_n4 || !ap_n5 || !ap_n6 || !ap_n7 || !ap_n8 || !ae_n1 || !ae_n2 || !ae_n3 || !ae_n4 || !ae_n5 || !ae_n6 || !s_n1 || !s_n2 || !s_n3 || !s_n4 || !s_n5 || !s_n6 || !s_n7 || !s_n8 || !asp_n1 || !asp_n2 || !asp_n3 || !asp_n4 || !asp_n5 || !asp_n6 || !asp_n7 || !sn_n1 || !sn_n2 || !sn_n3 || !dc_n1 || !dc_n2 || !dc_n3 || !sd_n1 || !sd_n2 || !sd_n3 || !sd_n4 ) {
        return res.send('Informe todos os campos obrigatórios');
      } */
  
      const id = await connection('tbaluno_anamnese').insert({
        nome,
        sexo,
        nascimento,
      })

     
     
      
      const id_aluno = id[0];
    


      const am = await connection('tbaspectos_motores_anamnese').insert({
        id_aluno, 
        am_n1,
        am_n2,
        am_n3,
       });


       const ap = await connection('tbaspectos_perceptivos_anamnese').insert({
        id_aluno, ap_n1, ap_n2, ap_n3, ap_n4, ap_n5, ap_n6, ap_n7, ap_n8,
       });


       const a = await connection('tbatitudes_anamnese').insert({
        id_aluno, asp_n1, asp_n2, asp_n3, asp_n4, asp_n5, asp_n6, asp_n7,
       });


       const d = await connection('tbdados_anamnese').insert({
         id_aluno, d_n1, d_n2, d_n3, d_n4, d_n5, d_n6, d_n7, d_n8, d_n9, d_n10, d_n11, d_n12, d_n13, d_n14,
      
       });


       const h = await connection('tbhistorico_anamnese').insert({
         id_aluno, h_n1, h_n2, h_n3, h_n4, h_n5, h_n6, h_n7, h_n8, h_n9, h_n10, h_n11, h_n12, h_n13,
      
       });

       const ae = await connection('tbaspectos_emocionais_anamnese').insert({
        id_aluno, ae_n1, ae_n2, ae_n3, ae_n4, ae_n5, ae_n6,

       })

       const s = await connection('tbsociabilidade_anamnese').insert({
        id_aluno, s_n1, s_n2, s_n3, s_n4, s_n5, s_n6, s_n7, s_n8,
        
       })

       const sn = await connection('tbsono_anamnese').insert({
        id_aluno, sn_n1, sn_n2, sn_n3,
        
       })

       const dc = await connection('tbdisciplinação_anamnese').insert({
        id_aluno, dc_n1, dc_n2, dc_n3,
        
       })

       const sd = await connection('tbsaude_anamnese').insert({
        id_aluno, sd_n1, sd_n2, sd_n3, sd_n4,
        
       })


  
       return res.send("Os dados foram enviados com sucesso!");

       
       
    } catch (error) {
      console.error(error);
      return res.send('Erro interno do servidor');
    }
  
    
}

//função de triagem do aluno
export async function triagemStudent (req:Request ,res:Response) {
  try{
     const {idTriagem, idAluno, idProfessor, dataTriagem, psicopedagogo} = req.body;
     const {n1_n1, n1_n2, n1_n3} = req.body;
     const {n2_n1, n2_n2, n2_n3, n2_n4} = req.body;
     const {n3_n1, n3_n2, n3_n3} = req.body;
     const {n4_n1, n4_n2, n4_n3, n4_n4, n4_n5, n4_n6} = req.body;
     const {mt_n1, mt_n2, mt_n3, mt_n4, mt_n5, mt_n6, mt_n7, mt_n8, mt_n9, mt_n10, mt_n11} = req.body;
     const {hc_n1, hc_n2, hc_n3, hc_n4, hc_n5, hc_n6, hc_n7, hc_n8, hc_n9, hc_n10, hc_n11, hc_n12, hc_n13, hc_n14, hc_n15} = req.body;
  
    if(!idTriagem || !idAluno || !dataTriagem || !idProfessor || !psicopedagogo || !n1_n1 || !n1_n2 || !n1_n3 || !n2_n1 || !n2_n2 || !n2_n3 || !n2_n4 || !n3_n1 || !n3_n2 || !n3_n3 || !n4_n1 || !n4_n2 || !n4_n3 || !n4_n4 || !n4_n5 || !n4_n6 ||
      !mt_n1 || !mt_n2 || !mt_n3 || !mt_n4 || !mt_n5 || !mt_n6 || !mt_n7 || !mt_n8 || !mt_n9 || !mt_n10 || !mt_n11 || !hc_n1 || !hc_n2 || !hc_n3 || !hc_n4 || !hc_n5 || !hc_n6 || !hc_n7 || !hc_n8 || !hc_n9 || !hc_n10 || !hc_n11 || !hc_n12 || !hc_n13 || !hc_n14 || !hc_n15){
      return res.send("Informe todos os dados obrigatórios")
    }

    
      const id_triagem = idTriagem;
      const id_aluno = idAluno;
      const id_professor = idProfessor;
      const data_triagem = dataTriagem;

      const tr = await connection('tbtriagem').insert({
        id_triagem, id_aluno, id_professor, data_triagem, psicopedagogo,

      });


      /*const idTriagem = await connection('tbtriagem').where('id_aluno', id_aluno)
      .where('data_triagem', data_triagem).where('id_professor', id_professor).where('psicopedagogo', psicopedagogo);


      const id_triagem = idTriagem[0].id_triagem;*/



    const a = await connection('triagem_n1').insert({
      id_triagem, id_aluno, n1_n1, n1_n2, n1_n3,
    });

    const b = await connection('triagem_n2').insert({
     id_triagem, id_aluno, n2_n1, n2_n2, n2_n3, n2_n4,
    });

    const c = await connection('triagem_n3').insert({
     id_triagem, id_aluno, n3_n1, n3_n2, n3_n3,
    });

    const d = await connection('triagem_n4').insert({
     id_triagem, id_aluno, n4_n1, n4_n2, n4_n3, n4_n4, n4_n5, n4_n6,
    });

    const mt = await connection('triagem_matematica').insert({
     id_triagem, id_aluno, mt_n1, mt_n2, mt_n3, mt_n4, mt_n5, mt_n6, mt_n7, mt_n8, mt_n9, mt_n10, mt_n11,
    });

    const hc = await connection('triagem_hab_comp').insert({
     id_triagem, id_aluno, hc_n1, hc_n2, hc_n3, hc_n4, hc_n5, hc_n6, hc_n7, hc_n8, hc_n9, hc_n10, hc_n11, hc_n12, hc_n13, hc_n14, hc_n15,
    });



    return res.send("Os dados foram enviados com sucesso!");







  
  } catch (error) {
      console.error(error);
      return res.send("Erro interno do servidor");
    }
}