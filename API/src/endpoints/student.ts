//imports essenciais
import express, { Request, Response} from "express";
import connection from "../database/connection"
const multer = require('multer');


//função de listagem do aluno
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



//função de registro do formulário de anamnese
export async function postAnamnese (req:Request, res:Response){
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


  
      if (!nome || !sexo || !nascimento || !d_n1 || !d_n2 || !d_n3 || !d_n4 || !d_n5 || !d_n6 || !d_n7 || !d_n8 || !d_n9 || !d_n10 || !d_n11 || !d_n12 || !d_n13 || !d_n14 || !h_n1 || !h_n2 || !h_n3 || !h_n4 || !h_n5 || !h_n6 || !h_n7 || !h_n8 || !h_n9 || !h_n10 || !h_n11 || !h_n12 || !h_n13 || !am_n1 || !am_n2 || !am_n3 || !ap_n1 || !ap_n2 || !ap_n3 || !ap_n4 || !ap_n5 || !ap_n6 || !ap_n7 || !ap_n8 || !ae_n1 || !ae_n2 || !ae_n3 || !ae_n4 || !ae_n5 || !ae_n6 || !s_n1 || !s_n2 || !s_n3 || !s_n4 || !s_n5 || !s_n6 || !s_n7 || !s_n8 || !asp_n1 || !asp_n2 || !asp_n3 || !asp_n4 || !asp_n5 || !asp_n6 || !asp_n7 || !sn_n1 || !sn_n2 || !sn_n3 || !dc_n1 || !dc_n2 || !dc_n3 || !sd_n1 || !sd_n2 || !sd_n3 || !sd_n4 ) {
        return res.send('Informe todos os campos obrigatórios');
      } 
  
      const id = await connection('tbaluno_anamnese').insert({
        nome,
        sexo,
        nascimento,
      })

     
     
      
      const id_aluno = id[0];
    


       await connection('tbaspectos_motores_anamnese').insert({
        id_aluno, 
        am_n1,
        am_n2,
        am_n3,
       });


       await connection('tbaspectos_perceptivos_anamnese').insert({
        id_aluno, ap_n1, ap_n2, ap_n3, ap_n4, ap_n5, ap_n6, ap_n7, ap_n8,
       });


       await connection('tbatitudes_anamnese').insert({
        id_aluno, asp_n1, asp_n2, asp_n3, asp_n4, asp_n5, asp_n6, asp_n7,
       });


       await connection('tbdados_anamnese').insert({
         id_aluno, d_n1, d_n2, d_n3, d_n4, d_n5, d_n6, d_n7, d_n8, d_n9, d_n10, d_n11, d_n12, d_n13, d_n14,
      
       });


       await connection('tbhistorico_anamnese').insert({
         id_aluno, h_n1, h_n2, h_n3, h_n4, h_n5, h_n6, h_n7, h_n8, h_n9, h_n10, h_n11, h_n12, h_n13,
      
       });

       await connection('tbaspectos_emocionais_anamnese').insert({
        id_aluno, ae_n1, ae_n2, ae_n3, ae_n4, ae_n5, ae_n6,

       })

       await connection('tbsociabilidade_anamnese').insert({
        id_aluno, s_n1, s_n2, s_n3, s_n4, s_n5, s_n6, s_n7, s_n8,
        
       })

       await connection('tbsono_anamnese').insert({
        id_aluno, sn_n1, sn_n2, sn_n3,
        
       })

       await connection('tbdisciplinação_anamnese').insert({
        id_aluno, dc_n1, dc_n2, dc_n3,
        
       })

       await connection('tbsaude_anamnese').insert({
        id_aluno, sd_n1, sd_n2, sd_n3, sd_n4,
        
       })


  
       return res.send("Os dados foram enviados com sucesso!");

       
       
    } catch (error) {
      console.error(error);
      return res.send('Erro interno do servidor');
    }
  
    
}





//função para alterar/atualizar os dados da anamnese
export async function putAnamnese(req: Request, res: Response) {
  try {
      const id_aluno = req.params.id_aluno;
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

    
    if (!id_aluno || !nome || !sexo || !nascimento || !d_n1 || !d_n2 || !d_n3 || !d_n4 || !d_n5 || !d_n6 || !d_n7 || !d_n8 || !d_n9 || !d_n10 || !d_n11 || !d_n12 || !d_n13 || !d_n14 || !h_n1 || !h_n2 || !h_n3 || !h_n4 || !h_n5 || !h_n6 || !h_n7 || !h_n8 || !h_n9 || !h_n10 || !h_n11 || !h_n12 || !h_n13 || !am_n1 || !am_n2 || !am_n3 || !ap_n1 || !ap_n2 || !ap_n3 || !ap_n4 || !ap_n5 || !ap_n6 || !ap_n7 || !ap_n8 || !ae_n1 || !ae_n2 || !ae_n3 || !ae_n4 || !ae_n5 || !ae_n6 || !s_n1 || !s_n2 || !s_n3 || !s_n4 || !s_n5 || !s_n6 || !s_n7 || !s_n8 || !asp_n1 || !asp_n2 || !asp_n3 || !asp_n4 || !asp_n5 || !asp_n6 || !asp_n7 || !sn_n1 || !sn_n2 || !sn_n3 || !dc_n1 || !dc_n2 || !dc_n3 || !sd_n1 || !sd_n2 || !sd_n3 || !sd_n4 ) {
      return res.send('Informe todos os campos obrigatórios');
    } 

    
    await connection('tbaluno_anamnese').where('id_aluno', id_aluno).update({
      nome,
      sexo,
      nascimento,
    });

     await connection('tbaspectos_motores_anamnese').where('id_aluno', id_aluno).update({
      id_aluno, 
      am_n1,
      am_n2,
      am_n3,
     });


     await connection('tbaspectos_perceptivos_anamnese').where('id_aluno', id_aluno).update({
      id_aluno, ap_n1, ap_n2, ap_n3, ap_n4, ap_n5, ap_n6, ap_n7, ap_n8,
     });


     await connection('tbatitudes_anamnese').where('id_aluno', id_aluno).update({
      id_aluno, asp_n1, asp_n2, asp_n3, asp_n4, asp_n5, asp_n6, asp_n7,
     });


     await connection('tbdados_anamnese').where('id_aluno', id_aluno).update({
       id_aluno, d_n1, d_n2, d_n3, d_n4, d_n5, d_n6, d_n7, d_n8, d_n9, d_n10, d_n11, d_n12, d_n13, d_n14,
     });


     await connection('tbhistorico_anamnese').where('id_aluno', id_aluno).update({
       id_aluno, h_n1, h_n2, h_n3, h_n4, h_n5, h_n6, h_n7, h_n8, h_n9, h_n10, h_n11, h_n12, h_n13,
     });

     await connection('tbaspectos_emocionais_anamnese').where('id_aluno', id_aluno).update({
      id_aluno, ae_n1, ae_n2, ae_n3, ae_n4, ae_n5, ae_n6,
     })

     await connection('tbsociabilidade_anamnese').where('id_aluno', id_aluno).update({
      id_aluno, s_n1, s_n2, s_n3, s_n4, s_n5, s_n6, s_n7, s_n8,
     })

     await connection('tbsono_anamnese').where('id_aluno', id_aluno).update({
      id_aluno, sn_n1, sn_n2, sn_n3,
     })

     await connection('tbdisciplinação_anamnese').where('id_aluno', id_aluno).update({
      id_aluno, dc_n1, dc_n2, dc_n3,
     })

     await connection('tbsaude_anamnese').where('id_aluno', id_aluno).update({
      id_aluno, sd_n1, sd_n2, sd_n3, sd_n4,
     })



    return res.send('Os dados foram atualizados com sucesso!');
  } catch (error) {
    console.error(error);
    return res.send('Erro interno do servidor');
  }
}




//função para deletar os dados da anamnese

export async function deleteAnamnese(req: Request, res: Response) {
  try {
    const id_aluno = req.params.id_aluno;

  
    await connection('tbaluno_anamnese').where('id_aluno', id_aluno).del();

    await connection('tbaspectos_motores_anamnese').where('id_aluno', id_aluno).del();

    await connection('tbaspectos_perceptivos_anamnese').where('id_aluno', id_aluno).del();

    await connection('tbatitudes_anamnese').where('id_aluno', id_aluno).del();

    await connection('tbdados_anamnese').where('id_aluno', id_aluno).del();

    await connection('tbhistorico_anamnese').where('id_aluno', id_aluno).del();

    await connection('tbaspectos_emocionais_anamnese').where('id_aluno', id_aluno).del();

    await connection('tbsociabilidade_anamnese').where('id_aluno', id_aluno).del();

    await connection('tbsono_anamnese').where('id_aluno', id_aluno).del();

    await connection('tbdisciplinação_anamnese').where('id_aluno', id_aluno).del();

    await connection('tbsaude_anamnese').where('id_aluno', id_aluno).del();

  
    return res.send('Os dados foram excluídos com sucesso!');
  } catch (error) {
    console.error(error);
    return res.send('Erro interno do servidor');
  }
}


//função para mostrar os dados da anamnese

export async function getAnamnese(req: Request, res: Response) {
  try {
    const id_aluno = req.params.id_aluno; 

    const anamneseData = await connection('tbaluno_anamnese').where('id_aluno', id_aluno).first();

    const aspectosMotores = await connection('tbaspectos_motores_anamnese').where('id_aluno', id_aluno).first();

    const aspectosPerceptivos = await connection('tbaspectos_perceptivos_anamnese').where('id_aluno', id_aluno).first();

    const atitudesAnamnese = await connection('tbatitudes_anamnese').where('id_aluno', id_aluno).first();

    const dadosAnamnese = await connection('tbdados_anamnese').where('id_aluno', id_aluno).first();

    const historicoAnamnese = await connection('tbhistorico_anamnese').where('id_aluno', id_aluno).first();

    const aspectosEmocionais = await connection('tbaspectos_emocionais_anamnese').where('id_aluno', id_aluno).first();

    const sociabilidadeAnamnese = await connection('tbsociabilidade_anamnese').where('id_aluno', id_aluno).first();

    const sonoAnamnese = await connection('tbsono_anamnese').where('id_aluno', id_aluno).first();

    const discAnamnese = await connection('tbdisciplinação_anamnese').where('id_aluno', id_aluno).first();

    const saudeAnamnese = await connection('tbsaude_anamnese').where('id_aluno', id_aluno).first();
    

    return res.json({ anamneseData, aspectosMotores, aspectosPerceptivos, atitudesAnamnese, dadosAnamnese, historicoAnamnese,
    aspectosEmocionais, sociabilidadeAnamnese, sonoAnamnese, discAnamnese, saudeAnamnese  });
  } catch (error) {
    console.error(error);
    return res.send('Erro interno do servidor');
  }
}

/*
export async function imageUpload (req: Request, res: Response) {
  try{
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'uploads/'); // pasta onde as imagens serão armazenadas temporariamente
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    });
    
    const upload = multer({ storage: storage });

    const { filename } = req.file;
    const { descricao } = req.body;

    if(!filename || !descricao) {
      return res.send('Informe todos os dados obrigatórios');
    }

    await connection('tbimagem_anamnese').insert({
      filename, descricao
    })

    return res.send('Os dados foram enviados com sucesso');

  }catch(error){
    console.error(error);
    return res.send('Erro interno do servidor');
  }
}

