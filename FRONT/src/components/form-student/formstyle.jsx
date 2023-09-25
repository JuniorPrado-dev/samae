import styled from 'styled-components'

export const Body = styled.body`
    background-color: #cbd6d6;
    height: 100vh;
`;

export const Fieldset = styled.fieldset`
    background: #FEFEFE;
    margin: auto;
    padding: 10px;
    width: 30%;
    color: black;
    border-radius: 10px;
`;

export const Legend = styled.legend`
    background-image: linear-gradient(to bottom, #2b3467, #1d5d9b);
    padding: 5px 10px;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
    color: lightgray;
`;

export const Label = styled.label`
    margin: 10px;
`;

export const Gender = styled.input`
    margin: 3px 20px;
    margin-bottom: 10px;
    border: 1px solid #b9b4c7;

    &:focus{
        outline: 0;
        border: 1px solid transparent;
        border-top: none;
        border-bottom: 2px solid #2b3467;
        background: linear-gradient(to top, #dcdcdc, transparent)
        
    }
    
    &:placeholder{
        font-size: 15px;
        color: #b9b4c7;
    }
`;

export const Date = styled.input`
    margin: 3px 20px;
    margin-bottom: 10px;
    border: 1px solid #b9b4c7;
    
    &:focus{
        outline: 0;
        border: 1px solid transparent;
        border-top: none;
        border-bottom: 2px solid #2b3467;
        background: linear-gradient(to top, #dcdcdc, transparent)
        
    }

    &:placeholder{
        font-size: 15px;
        color: #b9b4c7;
    }

`;

export const Input = styled.input`
    margin: 3px 20px;
    margin-bottom: 10px;
    border: 1px solid #b9b4c7;
    
    &:hover{
        width: 400px;
        border: 1px solid gray;
    }

    &:focus{
        outline: 0;
        border: 1px solid transparent;
        border-top: none;
        border-bottom: 2px solid #2b3467;
        background: linear-gradient(to top, #dcdcdc, transparent)
        
    }

    &:placeholder{
        font-size: 15px;
        color: #b9b4c7;
    }
`;

export const Btns = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: space-evenly;
`;

export const Insert = styled.button`
    padding: 5px 15px;
    cursor: pointer;
    border: 0 none;
    border-radius: 5px;
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
`;

export const Reset = styled.button`
    padding: 5px 15px;
    cursor: pointer;
    border: 0 none;
    border-radius: 5px;
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
`;
