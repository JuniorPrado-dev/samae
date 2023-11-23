import express, { Request, Response} from "express";
import connection from "../database/connection"

//função para registrar triagem do aluno
export async function postTriagem (req:Request ,res:Response) {
    try{
      const {
        idTriagem,
        cabecalho,
        hc,
        leituraEscritaN1,
        leituraEscritaN2,
        leituraEscritaN3,
        leituraEscritaN4,
        matematica,
      } = req.body;

    
       if (
      !idTriagem ||
      !cabecalho ||
      !hc ||
      !leituraEscritaN1 ||
      !leituraEscritaN2 ||
      !leituraEscritaN3 ||
      !leituraEscritaN4 ||
      !matematica
    ) {
      return res.send('Informe todos os dados obrigatórios');
    }
  
      
        
  
      await connection('tbtriagem').insert({
        id_triagem: idTriagem,
        q1: cabecalho.q1,
        q2: cabecalho.q2,
        q3: cabecalho.q3,
        q4: cabecalho.q4,
        });
  
      await connection('triagem_n1').insert({
        id_triagem: idTriagem, 
        q1: leituraEscritaN1.q1,
        q2: leituraEscritaN1.q2,
        q3: leituraEscritaN1.q3,
      });
  
      await connection('triagem_n2').insert({
        id_triagem: idTriagem,
        q1: leituraEscritaN2.q1,
        q2: leituraEscritaN2.q2,
        q3: leituraEscritaN2.q3,
        q4: leituraEscritaN2.q4,
      });
  
      await connection('triagem_n3').insert({
        id_triagem: idTriagem,
        q1: leituraEscritaN3.q1,
        q2: leituraEscritaN3.q2,
        q3: leituraEscritaN3.q3,
      });
  
      await connection('triagem_n4').insert({
        id_triagem: idTriagem,
        q1: leituraEscritaN4.q1,
        q2: leituraEscritaN4.q2,
        q3: leituraEscritaN4.q3,
        q4: leituraEscritaN4.q4,
        q5: leituraEscritaN4.q5,
        q6: leituraEscritaN4.q6,
      });
  
      await connection('triagem_matematica').insert({
        id_triagem: idTriagem,
        q1: matematica.q1,
        q2: matematica.q2,
        q3: matematica.q3,
        q4: matematica.q4,
        q5: matematica.q5,
        q6: matematica.q6,
        q7: matematica.q7,
        q8: matematica.q8,
        q9: matematica.q9,
        q10: matematica.q10,
        q11: matematica.q11,
      });
  
       await connection('triagem_hab_comp').insert({
        id_triagem: idTriagem,
        q1: hc.q1,
        q2: hc.q2,
        q3: hc.q3,
        q4: hc.q4,
        q5: hc.q5,
        q6: hc.q6,
        q7: hc.q7,
        q8: hc.q8,
        q9: hc.q9,
        q10: hc.q10,
        q11: hc.q11,
        q12: hc.q12,
        q13: hc.q13,
        q14: hc.q14,
        q15: hc.q15,
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
    const {
      cabecalho,
      hc,
      leituraEscritaN1,
      leituraEscritaN2,
      leituraEscritaN3,
      leituraEscritaN4,
      matematica,
    } = req.body;

    const id_triagem = req.params.id;

  
     if (
    !id_triagem ||
    !cabecalho ||
    !hc ||
    !leituraEscritaN1 ||
    !leituraEscritaN2 ||
    !leituraEscritaN3 ||
    !leituraEscritaN4 ||
    !matematica
  ) {
    return res.send('Informe todos os dados obrigatórios');
  }

  
      
      
      
    await connection('tbtriagem').where(id_triagem, 'id_triagem').update({
      q1: cabecalho.q1,
      q2: cabecalho.q2,
      q3: cabecalho.q3,
      q4: cabecalho.q4,
      });

    await connection('triagem_n1').where(id_triagem, 'id_triagem').update({ 
      q1: leituraEscritaN1.q1,
      q2: leituraEscritaN1.q2,
      q3: leituraEscritaN1.q3,
    });

    await connection('triagem_n2').where(id_triagem, 'id_triagem').update({
      q1: leituraEscritaN2.q1,
      q2: leituraEscritaN2.q2,
      q3: leituraEscritaN2.q3,
      q4: leituraEscritaN2.q4,
    });

    await connection('triagem_n3').where(id_triagem, 'id_triagem').update({
      q1: leituraEscritaN3.q1,
      q2: leituraEscritaN3.q2,
      q3: leituraEscritaN3.q3,
    });

    await connection('triagem_n4').where(id_triagem, 'id_triagem').update({
      q1: leituraEscritaN4.q1,
      q2: leituraEscritaN4.q2,
      q3: leituraEscritaN4.q3,
      q4: leituraEscritaN4.q4,
      q5: leituraEscritaN4.q5,
      q6: leituraEscritaN4.q6,
    });

    await connection('triagem_matematica').where(id_triagem, 'id_triagem').update({
      q1: matematica.q1,
      q2: matematica.q2,
      q3: matematica.q3,
      q4: matematica.q4,
      q5: matematica.q5,
      q6: matematica.q6,
      q7: matematica.q7,
      q8: matematica.q8,
      q9: matematica.q9,
      q10: matematica.q10,
      q11: matematica.q11,
    });

     await connection('triagem_hab_comp').where(id_triagem, 'id_triagem').update({
      q1: hc.q1,
      q2: hc.q2,
      q3: hc.q3,
      q4: hc.q4,
      q5: hc.q5,
      q6: hc.q6,
      q7: hc.q7,
      q8: hc.q8,
      q9: hc.q9,
      q10: hc.q10,
      q11: hc.q11,
      q12: hc.q12,
      q13: hc.q13,
      q14: hc.q14,
      q15: hc.q15,
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


