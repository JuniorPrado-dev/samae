import express, { Request, Response} from "express";
import connection from "../database/connection"

//função para registrar triagem do aluno
export async function postTriagem (req:Request ,res:Response) {
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
  
      await connection('tbtriagem').insert({
          id_triagem, id_aluno, id_professor, data_triagem, psicopedagogo,
  
        });
  
      await connection('triagem_n1').insert({
        id_triagem, id_aluno, n1_n1, n1_n2, n1_n3,
      });
  
      await connection('triagem_n2').insert({
       id_triagem, id_aluno, n2_n1, n2_n2, n2_n3, n2_n4,
      });
  
      await connection('triagem_n3').insert({
       id_triagem, id_aluno, n3_n1, n3_n2, n3_n3,
      });
  
      await connection('triagem_n4').insert({
       id_triagem, id_aluno, n4_n1, n4_n2, n4_n3, n4_n4, n4_n5, n4_n6,
      });
  
      await connection('triagem_matematica').insert({
       id_triagem, id_aluno, mt_n1, mt_n2, mt_n3, mt_n4, mt_n5, mt_n6, mt_n7, mt_n8, mt_n9, mt_n10, mt_n11,
      });
  
       await connection('triagem_hab_comp').insert({
       id_triagem, id_aluno, hc_n1, hc_n2, hc_n3, hc_n4, hc_n5, hc_n6, hc_n7, hc_n8, hc_n9, hc_n10, hc_n11, hc_n12, hc_n13, hc_n14, hc_n15,
      });
  
  
  
      return res.send("Os dados foram enviados com sucesso!");
  
    
    } catch (error) {
        console.error(error);
        return res.send("Erro interno do servidor");
      }
  }




  //função de para alterar os dados da triagem
export async function putTriagem (req:Request ,res:Response) {
  try{
     const id_triagem = req.params.id; 
     const {idAluno, idProfessor, dataTriagem, psicopedagogo} = req.body;
     const {n1_n1, n1_n2, n1_n3} = req.body;
     const {n2_n1, n2_n2, n2_n3, n2_n4} = req.body;
     const {n3_n1, n3_n2, n3_n3} = req.body;
     const {n4_n1, n4_n2, n4_n3, n4_n4, n4_n5, n4_n6} = req.body;
     const {mt_n1, mt_n2, mt_n3, mt_n4, mt_n5, mt_n6, mt_n7, mt_n8, mt_n9, mt_n10, mt_n11} = req.body;
     const {hc_n1, hc_n2, hc_n3, hc_n4, hc_n5, hc_n6, hc_n7, hc_n8, hc_n9, hc_n10, hc_n11, hc_n12, hc_n13, hc_n14, hc_n15} = req.body;
  
    if(!id_triagem || !idAluno || !dataTriagem || !idProfessor || !psicopedagogo || !n1_n1 || !n1_n2 || !n1_n3 || !n2_n1 || !n2_n2 || !n2_n3 || !n2_n4 || !n3_n1 || !n3_n2 || !n3_n3 || !n4_n1 || !n4_n2 || !n4_n3 || !n4_n4 || !n4_n5 || !n4_n6 ||
      !mt_n1 || !mt_n2 || !mt_n3 || !mt_n4 || !mt_n5 || !mt_n6 || !mt_n7 || !mt_n8 || !mt_n9 || !mt_n10 || !mt_n11 || !hc_n1 || !hc_n2 || !hc_n3 || !hc_n4 || !hc_n5 || !hc_n6 || !hc_n7 || !hc_n8 || !hc_n9 || !hc_n10 || !hc_n11 || !hc_n12 || !hc_n13 || !hc_n14 || !hc_n15){
      return res.send("Informe todos os dados obrigatórios")
    }

    
    
      const id_aluno = idAluno;
      const id_professor = idProfessor;
      const data_triagem = dataTriagem;

    await connection('tbtriagem').where('id_triagem', id_triagem).update({
         id_aluno, id_professor, data_triagem, psicopedagogo,
      });

    await connection('triagem_n1').where('id_triagem', id_triagem).update({
       id_aluno, n1_n1, n1_n2, n1_n3,
    });

    await connection('triagem_n2').where('id_triagem', id_triagem).update({
      id_aluno, n2_n1, n2_n2, n2_n3, n2_n4,
    });

    await connection('triagem_n3').where('id_triagem', id_triagem).update({
      id_aluno, n3_n1, n3_n2, n3_n3,
    });

    await connection('triagem_n4').where('id_triagem', id_triagem).update({
      id_aluno, n4_n1, n4_n2, n4_n3, n4_n4, n4_n5, n4_n6,
    });

    await connection('triagem_matematica').where('id_triagem', id_triagem).update({
      id_aluno, mt_n1, mt_n2, mt_n3, mt_n4, mt_n5, mt_n6, mt_n7, mt_n8, mt_n9, mt_n10, mt_n11,
    });

     await connection('triagem_hab_comp').where('id_triagem', id_triagem).update({
      id_aluno, hc_n1, hc_n2, hc_n3, hc_n4, hc_n5, hc_n6, hc_n7, hc_n8, hc_n9, hc_n10, hc_n11, hc_n12, hc_n13, hc_n14, hc_n15,
    });



    return res.send("Os dados foram atualizados com sucesso!");


  
  } catch (error) {
      console.error(error);
      return res.send("Erro interno do servidor");
    }
}


//função para deletar os dados da triagem

export async function deleteTriagem(req: Request, res: Response) {
  try {
    const id_triagem = req.params.id;

  
    await connection('tbtriagem').where('id_triagem', id_triagem).del();

    await connection('triagem_n1').where('id_triagem', id_triagem).del();

    await connection('triagem_n2').where('id_triagem', id_triagem).del();

    await connection('triagem_n3').where('id_triagem', id_triagem).del();

    await connection('triagem_n4').where('id_triagem', id_triagem).del();

    await connection('triagem_hab_comp').where('id_triagem', id_triagem).del();

    await connection('triagem_matematica').where('id_triagem', id_triagem).del();

  
  
    return res.send('Os dados foram excluídos com sucesso!');
  } catch (error) {
    console.error(error);
    return res.send('Erro interno do servidor');
  }
}

//função para mostrar os dados da triagem

export async function getTriagem(req: Request, res: Response) {
  try {
    const id_triagem = req.params.id; 

    const triagem = await connection('tbtriagem').where('id_triagem', id_triagem).first();

    const triagemN1 = await connection('triagem_n1').where('id_triagem', id_triagem).first();

    const triagemN2 = await connection('triagem_n2').where('id_triagem', id_triagem).first();

    const triagemN3 = await connection('triagem_n3').where('id_triagem', id_triagem).first();

    const triagemN4 = await connection('triagem_n4').where('id_triagem', id_triagem).first();

    const triagemHabComp = await connection('triagem_hab_comp').where('id_triagem', id_triagem).first();

    const triagemMatematica = await connection('triagem_matematica').where('id_triagem', id_triagem).first();
    

    return res.json({ triagem, triagemN1, triagemN2, triagemN3, triagemN4, triagemHabComp, triagemMatematica
     });
  } catch (error) {
    console.error(error);
    return res.send('Erro interno do servidor');
  }
}


