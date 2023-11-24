//imports essenciais
import express, { Request, Response} from "express";
import connection from "../database/connection"
import multer, { Multer } from 'multer';




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

//função para deletar um aluno
export async function deleteStudent(req: Request, res: Response) {
    const id_aluno = req.params.id;

    try {
        const deletedRows = await connection('tbaluno_anamnese').where('id_aluno', id_aluno).del();

        if (deletedRows > 0) {
            return res.send(`Aluno com ID ${id_aluno} foi excluído com sucesso.`);
        } else {
            return res.status(404).send(`Aluno com ID ${id_aluno} não encontrado.`);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro interno do servidor');
    }
}




//função de registro do formulário de anamnese
export async function postAnamnese (req:Request, res:Response){
   try {
      const { alunoAnamnese,
         aspectosMotores,
         aspectosPerceptivos,
         atitudesAnamnese,
         dadosAnamnese,
         historicoAnamnese,          
         aspectosEmocionais,
         sociabilidadeAnamnese,
         sonoAnamnese,
         discAnamnese,
         saudeAnamnese} = req.body;
      
  
      if( !alunoAnamnese ||
          !aspectosMotores ||
          !aspectosPerceptivos ||
          !atitudesAnamnese ||
          !dadosAnamnese ||
          !historicoAnamnese ||
          !aspectosEmocionais ||
          !sociabilidadeAnamnese ||
          !sonoAnamnese ||
          !discAnamnese ||
          !saudeAnamnese) {
            return res.send('Informe todos os dados obrigatórios')
         }
  
      
    


       
 const id = await connection('tbaluno_anamnese').insert({
  nome: alunoAnamnese.q1,
  sexo: alunoAnamnese.q2,
  nascimento: alunoAnamnese.q3,
});

const idAluno = id[0];


await connection('tbaspectos_motores_anamnese').insert({
  id_aluno: idAluno,
  q1: aspectosMotores.q1,
  q2: aspectosMotores.q2,
  q3: aspectosMotores.q3,
});


await connection('tbaspectos_perceptivos_anamnese').insert({
  id_aluno: idAluno,
  q1: aspectosPerceptivos.q1,
  q2: aspectosPerceptivos.q2,
  q3: aspectosPerceptivos.q3,
  q4: aspectosPerceptivos.q4,
  q5: aspectosPerceptivos.q5,
  q6: aspectosPerceptivos.q6,
  q7: aspectosPerceptivos.q7,
  q8: aspectosPerceptivos.q8,
});

await connection('tbatitudes_anamnese').insert({
  id_aluno: idAluno,
  q1: atitudesAnamnese.q1,
  q2: atitudesAnamnese.q2,
  q3: atitudesAnamnese.q3,
  q4: atitudesAnamnese.q4,
  q5: atitudesAnamnese.q5,
  q6: atitudesAnamnese.q6,
  q7: atitudesAnamnese.q7,
});

await connection('tbdados_anamnese').insert({
  id_aluno: idAluno,
  q1: dadosAnamnese.q1,
  q2: dadosAnamnese.q2,
  q3: dadosAnamnese.q3,
  q4: dadosAnamnese.q4,
  q5: dadosAnamnese.q5,
  q6: dadosAnamnese.q6,
  q7: dadosAnamnese.q7,
  q8: dadosAnamnese.q8,
  q9: dadosAnamnese.q9,
  q10: dadosAnamnese.q10,
  q11: dadosAnamnese.q11,
  q12: dadosAnamnese.q12,
  q13: dadosAnamnese.q13,
  q14: dadosAnamnese.q14,
});

await connection('tbhistorico_anamnese').insert({
  id_aluno: idAluno,
  q1: historicoAnamnese.q1,
  q2: historicoAnamnese.q2,
  q3: historicoAnamnese.q3,
  q4: historicoAnamnese.q4,
  q5: historicoAnamnese.q5,
  q6: historicoAnamnese.q6,
  q7: historicoAnamnese.q7,
  q8: historicoAnamnese.q8,
  q9: historicoAnamnese.q9,
  q10: historicoAnamnese.q10,
  q11: historicoAnamnese.q11,
  q12: historicoAnamnese.q12,
  q13: historicoAnamnese.q13,
});

await connection('tbaspectos_emocionais_anamnese').insert({
  id_aluno: idAluno,
  q1: aspectosEmocionais.q1,
  q2: aspectosEmocionais.q2,
  q3: aspectosEmocionais.q3,
  q4: aspectosEmocionais.q4,
  q5: aspectosEmocionais.q5,
  q6: aspectosEmocionais.q6,
});

await connection('tbsociabilidade_anamnese').insert({
  id_aluno: idAluno,
  q1: sociabilidadeAnamnese.q1,
  q2: sociabilidadeAnamnese.q2,
  q3: sociabilidadeAnamnese.q3,
  q4: sociabilidadeAnamnese.q4,
  q5: sociabilidadeAnamnese.q5,
  q6: sociabilidadeAnamnese.q6,
  q7: sociabilidadeAnamnese.q7,
  q8: sociabilidadeAnamnese.q8,
});

await connection('tbsono_anamnese').insert({
  id_aluno: idAluno,
  q1: sonoAnamnese.q1,
  q2: sonoAnamnese.q2,
  q3: sonoAnamnese.q3,
});


await connection('tbdisciplinação_anamnese').insert({
  id_aluno: idAluno,
  q1: discAnamnese.q1,
  q2: discAnamnese.q2,
  q3: discAnamnese.q3,
});

await connection('tbsaude_anamnese').insert({
  id_aluno: idAluno,
  q1: saudeAnamnese.q1,
  q2: saudeAnamnese.q2,
  q3: saudeAnamnese.q3,
  q4: saudeAnamnese.q4,
});


  
       return res.send("Os dados foram enviados com sucesso!");

       
       
    } catch (error) {
      console.error(error);
      return res.send('Erro interno do servidor');
    }
  
    
}





//função para alterar/atualizar os dados da anamnese
export async function putAnamnese(req: Request, res: Response) {
  try {
    const { alunoAnamnese,
      aspectosMotores,
      aspectosPerceptivos,
      atitudesAnamnese,
      dadosAnamnese,
      historicoAnamnese,          
      aspectosEmocionais,
      sociabilidadeAnamnese,
      sonoAnamnese,
      discAnamnese,
      saudeAnamnese} = req.body;
   
     const id_aluno = req.params.id

   if( !id_aluno ||
       !alunoAnamnese ||
       !aspectosMotores ||
       !aspectosPerceptivos ||
       !atitudesAnamnese ||
       !dadosAnamnese ||
       !historicoAnamnese ||
       !aspectosEmocionais ||
       !sociabilidadeAnamnese ||
       !sonoAnamnese ||
       !discAnamnese ||
       !saudeAnamnese) {
         return res.send('Informe todos os dados obrigatórios')
      }

    
      await connection('tbaluno_anamnese').where(id_aluno, 'id_aluno').update({
        nome: alunoAnamnese.q1,
        sexo: alunoAnamnese.q2,
        nascimento: alunoAnamnese.q3,
      });
      
      
      await connection('tbaspectos_motores_anamnese').where(id_aluno, 'id_aluno').update({
        q1: aspectosMotores.q1,
        q2: aspectosMotores.q2,
        q3: aspectosMotores.q3,
      });
      
      
      await connection('tbaspectos_perceptivos_anamnese').where(id_aluno, 'id_aluno').update({
        q1: aspectosPerceptivos.q1,
        q2: aspectosPerceptivos.q2,
        q3: aspectosPerceptivos.q3,
        q4: aspectosPerceptivos.q4,
        q5: aspectosPerceptivos.q5,
        q6: aspectosPerceptivos.q6,
        q7: aspectosPerceptivos.q7,
        q8: aspectosPerceptivos.q8,
      });
      
      await connection('tbatitudes_anamnese').where(id_aluno, 'id_aluno').update({
        q1: atitudesAnamnese.q1,
        q2: atitudesAnamnese.q2,
        q3: atitudesAnamnese.q3,
        q4: atitudesAnamnese.q4,
        q5: atitudesAnamnese.q5,
        q6: atitudesAnamnese.q6,
        q7: atitudesAnamnese.q7,
      });
      
      await connection('tbdados_anamnese').where(id_aluno, 'id_aluno').update({
        q1: dadosAnamnese.q1,
        q2: dadosAnamnese.q2,
        q3: dadosAnamnese.q3,
        q4: dadosAnamnese.q4,
        q5: dadosAnamnese.q5,
        q6: dadosAnamnese.q6,
        q7: dadosAnamnese.q7,
        q8: dadosAnamnese.q8,
        q9: dadosAnamnese.q9,
        q10: dadosAnamnese.q10,
        q11: dadosAnamnese.q11,
        q12: dadosAnamnese.q12,
        q13: dadosAnamnese.q13,
        q14: dadosAnamnese.q14,
      });
      
      await connection('tbhistorico_anamnese').where(id_aluno, 'id_aluno').update({
        q1: historicoAnamnese.q1,
        q2: historicoAnamnese.q2,
        q3: historicoAnamnese.q3,
        q4: historicoAnamnese.q4,
        q5: historicoAnamnese.q5,
        q6: historicoAnamnese.q6,
        q7: historicoAnamnese.q7,
        q8: historicoAnamnese.q8,
        q9: historicoAnamnese.q9,
        q10: historicoAnamnese.q10,
        q11: historicoAnamnese.q11,
        q12: historicoAnamnese.q12,
        q13: historicoAnamnese.q13,
      });
      
      await connection('tbaspectos_emocionais_anamnese').where(id_aluno, 'id_aluno').update({
        q1: aspectosEmocionais.q1,
        q2: aspectosEmocionais.q2,
        q3: aspectosEmocionais.q3,
        q4: aspectosEmocionais.q4,
        q5: aspectosEmocionais.q5,
        q6: aspectosEmocionais.q6,
      });
      
      await connection('tbsociabilidade_anamnese').where(id_aluno, 'id_aluno').update({
        q1: sociabilidadeAnamnese.q1,
        q2: sociabilidadeAnamnese.q2,
        q3: sociabilidadeAnamnese.q3,
        q4: sociabilidadeAnamnese.q4,
        q5: sociabilidadeAnamnese.q5,
        q6: sociabilidadeAnamnese.q6,
        q7: sociabilidadeAnamnese.q7,
        q8: sociabilidadeAnamnese.q8,
      });
      
      await connection('tbsono_anamnese').where(id_aluno, 'id_aluno').update({
        q1: sonoAnamnese.q1,
        q2: sonoAnamnese.q2,
        q3: sonoAnamnese.q3,
      });
      
      
      await connection('tbdisciplinação_anamnese').where(id_aluno, 'id_aluno').update({
        q1: discAnamnese.q1,
        q2: discAnamnese.q2,
        q3: discAnamnese.q3,
      });
      
      await connection('tbsaude_anamnese').where(id_aluno, 'id_aluno').update({
        q1: saudeAnamnese.q1,
        q2: saudeAnamnese.q2,
        q3: saudeAnamnese.q3,
        q4: saudeAnamnese.q4,
      });
    
      

    return res.send('Os dados foram atualizados com sucesso!');
  } catch (error) {
    console.error(error);
    return res.send('Erro interno do servidor');
  }
}




//função para deletar os dados da anamnese

export async function deleteAnamnese(req: Request, res: Response) {
  try {
    const id_aluno = req.params.id;

  
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
    const id_aluno = req.params.id; 

    const alunoAnamnese = await connection('tbaluno_anamnese').where('id_aluno', id_aluno).first();

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
    

    return res.json({ alunoAnamnese, aspectosMotores, aspectosPerceptivos, atitudesAnamnese, dadosAnamnese, historicoAnamnese,
    aspectosEmocionais, sociabilidadeAnamnese, sonoAnamnese, discAnamnese, saudeAnamnese });
  } catch (error) {
    console.error(error);
    return res.send('Erro interno do servidor');
  }
}



 
export async function imageTest (req: Request, res: Response) {
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
    
  

    const { filename } = req.file || { filename: undefined }; ;
    const { descricao } = req.body;

    if (!filename || !descricao) {
      return res.send('Informe todos os campos obrigatórios')
    }

    await connection('tbimagem_anamnese').insert({
      filename, descricao
    })

    return res.send('Os dados foram enviados com sucesso!')
    

  }catch (error) {
    console.error(error);
    return res.send ('Erro interno do servidor');
  }
}
