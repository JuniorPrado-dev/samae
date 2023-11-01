import styled from "styled-components";

export const CardPesquisa = styled.div`
    margin: auto;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    padding: 0;
    width: 100%;
    height: 30px;
    transition: 800ms;
    background-color: transparent;

    @media (max-width: 550px){
        width: 100%;
    }
`

export const Barra = styled.input`
    margin: 0px;
    border: 1px solid #ccc;
    font-size: 12px;
    height: 32px;
    padding: 4px 8px;
    width: 80%;
    border-radius: 5px 20px 20px 5px;
    transition: 800ms;
    background-color: #fefefe;

    &:focus {
        outline: none;
        width: 100%;
        transition: 800ms;
    }
`

export const Lupa = styled.img`
    margin-left: -30px;
    margin-bottom: -11px;
    height: 30px;
    border: 1px solid #fefefe;
    border-radius: 30px;
`

//lista
export const Lista = styled.ul`
    padding: 3%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    border-radius: 5px;
    -webkit-box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);
    box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);

    @media (max-width: 550px){
        width: 90vw;
    }
`
export const Name = styled.li`
    margin: 3px;
    list-style-type: none;
`
//anamnese
