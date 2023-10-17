import styled from "styled-components";

export const Main = styled.main`
    padding: 3%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 60%;
    text-align: center;
    background-color: #FEFEFE;
    border-radius: 5px;
    -webkit-box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);
    box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);

    @media (max-width: 550px){
        width: 90vw;
    }
`

export const Item = styled.p`
    margin-bottom: -4px;
`

export const Checkbox = styled.input`
    all: unset;
    margin-right: 5px;
    border: 3px solid white;
    border-radius: 10px;
    width: 12px;
    height: 12px;
    display: inline-block;
    background: lightgray;
    box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0,0,0,0.5);
    
    &:checked {
        border: 3px solid white;
        border-radius: 10px;
        background: #79AC78;
        box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0,0,0,0.5);
    }
`

export const Li = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 5px;
`
export const Text = styled.input`
margin: 5px;
padding: 5px;
border: 1px solid #B9B4C7;

&:hover{
    width: 250px;
    border: 1px solid gray;
}

&:focus{
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 2px solid #2b3467;
    border-top: none;
    background: linear-gradient(to top, #DCDCDC, transparent);
}

&::placeholder{
    font-size: 15x;
    color: #B9B4C7;
}

`
export const Hour = styled.input`
    margin: 5px;
    padding: 3px;
    border: 1px solid #B9B4C7;

&:hover{
    border: 1px solid gray;
}

&:focus{
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 2px solid #2b3467;
    border-top: none;
    background: linear-gradient(to top, #DCDCDC, transparent);
}

&::placeholder{
    font-size: 15x;
    color: #B9B4C7;
}
`
export const Submit = styled.button`
    margin: 5px;
    padding: 8px 15px;
    background-image: linear-gradient(to bottom, #2b3467, #1D5D9B); 
    color: lightgray;
    font-size: 16px;
    border: transparent;
    border-radius: 20px;
    transition: 250ms;
    
    &:hover{
        transition: 250ms;
        font-size: 18px;
        color: #fefefe; 
    }
    
    &:focus{
        background-image: linear-gradient(to top, #2b3467, #1D5D9B);   
    }
`

export const Icon = styled.img`
    height: 25px;
`
export const IconX = styled.img`
    height: 20px;
`
export const BtnDelete = styled.button`
    margin-left: 10px;
    padding: 5px 7px 3px 7px;
    border: 2px solid transparent;
    border-radius: 20px;
    background-color: transparent;
    margin-bottom: -5px;

    &:hover{
        background: #F85959;
        transition-duration: 500ms;
    }

`
export const BtnNone = styled.button`
    border: none;
    background-color: transparent;
    margin-bottom: -5px;
`

export const AddTask = styled.button`
    height: 50px;
    margin-top: 10px;
    padding: 10px 15px;
    border: transparent;
    border-radius: 30px;
    background-color: #1D5D9B;


    &:hover{
        background: linear-gradient(to top, #2b3467, #1D5D9B)
    }

    &:focus{
        background: linear-gradient(to bottom, #2b3467, #1D5D9B);
    }
`

//alunos

export const MainAluno = styled.main`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    flex-wrap: wrap;
    list-style-type: none;
`

export const AlunoImg = styled.img`
    height: 100px;
`
export const CardAluno = styled.li`
    margin: auto; 
    margin-top: 8%;  
    padding: 30px;
    width: 300px;
    text-align: left;
    background-color: #FEFEFE;
    border-radius: 5px;
    -webkit-box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);
    box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);
    transition: 300ms;

    &:hover{
        padding: 35px;
        transition: 300ms;
    }
`

export const DeleteCard = styled.button`
    margin-top: 30%;
    padding: 6px 10px;
    background-color: #F85959; 
    float: right;
    border: transparent;
    border-radius: 20px;
    transition: 250ms;

    &:hover{
        background-color: #ec2300;
        transition: 250ms;
    }
`

export const InserirAluno = styled.li`
    padding: 1%;
    margin: auto;
    margin-top: 20vh;
    width: 60%;
    text-align: center;
    border-radius: 5px;

`
export const Adicionar = styled.li`
    margin: 30px 48%;
    list-style-type: none;
`
export const EscolherArquivo = styled.input`
    width: 100%;
`

//triagem
export const H1 = styled.h1`
    background-image: linear-gradient(to bottom, #2b3467, #1d5d9b);
    margin-top: -60px;
    margin-bottom: 20px;
    padding: 8px 10px;
    border-radius: 20px;
    text-align: center;
    font-weight: bold;
    color: #fefefe;
`;

export const MainTriagem = styled.main`
    padding: 3%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 60%;
    text-align: left;
    background-color: #FEFEFE;
    border-radius: 5px;
    -webkit-box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);
    box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);

    @media (max-width: 550px){
        width: 90vw;
    }
`
export const ImgCard = styled.img`
    height: 6vh;
`
export const Proximo = styled.button`
    margin-left: 90%;
    border: none;
    background: none;
    cursor: pointer;
`
export const Anterior = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`

export const Cards = styled.div`
    display: flex;
    justify-content: space-between;
`
export const InputTriagem = styled.input`
    width: 100%;
    margin-bottom: 10px;
    padding: 3px;
    border: 1px solid #B9B4C7;

    &:hover{
       border: 1px solid gray;
    }

    &:focus{
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 2px solid #2b3467;
        border-top: none;
        background: linear-gradient(to top, #DCDCDC, transparent);
    }
`
export const Enviar = styled.button`
    padding: 8px 15px;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    background-image: linear-gradient(to bottom, #2b3467, #1d5d9b);
    color:lightgray;
    transition: 250ms;
    font-size: 16px;

    &:hover {
        transition: 250ms;
        color: #fefefe;
        font-size: 18px;
      }
      &:focus {
        background-image: linear-gradient(to bottom, #2b3467, #1d5d9b);

      }
    

`
export const DivButton = styled.button`
    margin-bottom: -37px; 
    display: flex;
    flex-direction: row;    
    justify-content: flex-end;
    width: 100%;
    border: none;
    background: transparent;
`