import styled from 'styled-components'

export const Main = styled.main`
    height: 100%;
`;

export const Fieldset = styled.fieldset`
    border: none;
    text-align: left;
`;

export const Form = styled.form`
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    -webkit-box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);
    box-shadow: -1px 14px 36px -23px rgba(0,0,0,0.75);
    
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
export const Legend = styled.legend`
    background-image: linear-gradient(to bottom, #2b3467, #1d5d9b);
    margin-top: -40px;
    margin-bottom: 20px;
    padding: 8px 10px;
    border-radius: 20px;
    text-align: center;
    font-weight: bold;
    color: #fefefe;
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
    margin: 3px 5%;
    margin-bottom: 10px;
    border: 1px solid #b9b4c7;
    width: 90%;
    
    &:hover{
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
    padding: 8px 15px;
    cursor: pointer;
    border: 0 none;
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

`;

export const Reset = styled.button`
    padding: 8px 15px;
    cursor: pointer;
    border: 0 none;
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
`;