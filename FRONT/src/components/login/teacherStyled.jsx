import styled from "styled-components";

export const Body = styled.body`
    padding-top: 10%;
    background-color: #dcdcdc;
    height: 100vh;
`
export const Fieldset = styled.fieldset`
    margin: auto; 
    padding: 1%;
    width: 30%;
    background-color: #fefefe;
    border: transparent;
    border-radius: 5px;
    -webkit-box-shadow: 0px 29px 68px -44px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 29px 68px -44px rgba(0,0,0,0.75);
    box-shadow: 0px 29px 68px -44px rgba(0,0,0,0.75);
`
export const Legend =  styled.legend`
    padding: 5px 15px;
    text-align: center;
    background: linear-gradient(to top, #2b3467, #1597bb);
    color: #fefefe;
    border: transparent;
    border-radius: 20px;
    `

export const Label = styled.label`
    margin: 10%;
`
export const Input = styled.input`
    margin: 5px 10%;
    margin-bottom: 10px;
    padding: 3px;
    width: 80%;
    border: 1px solid #B9B4C7;
    border-radius: 3px;

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
        font-size: 15px;
        color: #B9B4C7;
    }
`
export const Btn = styled.button`
    margin: 10px 40%;
    padding: 7px 20px;
    font-size: 16px;
    text-align: center;
    background: linear-gradient(to top, #2b3467, #1597bb);
    color: #dcdcdc;
    border: transparent;
    border-radius: 30px;
    transition: 500ms;
    
    &:hover{
        color: #fefefe;
        font-size: 17px;
        transition: 500ms;
    }

    &:focus{
        background: linear-gradient(to bottom, #2b3467, #1597bb);
    }

`