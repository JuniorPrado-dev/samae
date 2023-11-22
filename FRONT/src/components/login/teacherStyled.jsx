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
    width: 60%
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
        color: gray;
    }
`
export const Btn = styled.button`
    margin: auto;
    margin-top: 5px;
    padding: 8px 20px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    background: linear-gradient(to top, #2b3467, #1597bb);
    color: #dcdcdc;
    border: transparent;
    border-radius: 30px;
    transition: 500ms;
    
    &:hover{
        color: #fefefe;
        font-size: 13px;
        transition: 500ms;
    }

    &:active{

        background: linear-gradient(to bottom, #2b3467, #1597bb);
    }

`