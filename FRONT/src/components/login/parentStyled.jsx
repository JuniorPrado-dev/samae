import styled from "styled-components";

export const Label = styled.label`
    display: inline-block;
    text-align: left;
    width: 100%;
`
export const Input = styled.input`
    margin: 0;
    margin-bottom: 10px;
    padding: 3px;
    width: 100%;
    outline: 0;
    border: 1px solid lightgray;
    border-bottom: 2px solid gray;
    border-radius: 3px;

    &:hover{
        border-bottom: 2px solid #1597bb;
    }

    &:focus{
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 2px solid #2b3467;
    }

    &::placeholder{
        font-size: 15px;
        color: #B9B4C7;
    }
`
export const Btn = styled.button`
    margin: auto;
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