import styled from "styled-components";

export const Div = styled.div `
    position: top;
    margin-top: 0;
    width: 100%;
    height: 15%;
    background-color: #2b3467; 
    background-image: linear-gradient(to right, #2b3467, #1D5D9B);
`;
export const ButtonHide= styled.button `
    margin: 10px 5px;
    padding: 6px;
    float: right;
    background-color: #2b3467;
    height: 40px;
    width: 40px;
    border: none;
    border-radius: 5px;

    &:active{
        background-image: linear-gradient(to top, #2b3467, #1D5D9B);
    }
    
`;

export const Line= styled.div`
    margin: 3px;
    background-color: lightgray;
    border-radius: 3px;
    height: 4px;
    width: 70%;
`;
export const Img= styled.img `
    margin: 15px;
    margin-left: 2%;
    margin-bottom: 25px;
    height: 60px;
`;
export const BtnEntrar = styled.button`
    margin: 10px 40%;
    padding: 7px 20px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    background: transparent;
    color: #dcdcdc;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    transition: 500ms;
    position: relative;
    left: 42vw;
    bottom: 10vh;
    
    &:hover{
        color: #fefefe;
        font-size: 17px;
        transition: 500ms;
    }

    &:active{
        background: #2b3467;
    }
`