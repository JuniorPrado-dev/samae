import styled from "styled-components";

export const Top = styled.div`
    height: 11vh;
    background: linear-gradient(to right, #2b3467, #1597bb);
    border-bottom: 4px solid lightgray;
`
export const Btns = styled.div`
    margin-right: 20px;
    float: right;
`
export const Professor = styled.button`
    margin: 10px;
    padding: 10px 25px;
    background-color: transparent;
    color: #fefefe; 
    border: 2px solid #fefefe;
    border-radius: 30px;
    transition: 500ms;

    &:hover{
        background-color: #fefefe;
        color: #2b3467;
        font-size: 19px;
        transition: 500ms;
    }
`
    
export const Responsavel = styled.button`
    margin: 10px;
    margin-left: 0;
    padding: 10px 25px;
    background-color: #2b3467;
    color: #fefefe;
    border: 2px solid #2b3467;
    border-radius: 30px;
    transition: 500ms;

    &:hover{
        background-color: transparent;
        color: #2b3467;
        font-size: 19px;
        transition: 500ms;
    }
`
