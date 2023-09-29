import styled from "styled-components";

export const Nav = styled.nav `
    display: block;
    margin-right: 30px;
    float: left;
    text-align: left;
    margin-top: 0;
    width: 15%;
    height: 100vh;
    display: block;
    align-items: left;
    justify-content: space-between;
`;

export const Agenda = styled.li `
    margin-top: 0;
    padding: 30px 20px;
    width: 100%;
    height: 5vh;
    background-color: #2b3467;
    border: none;
    border-bottom: 1px solid lightgray;

    &:active {
    background-image: linear-gradient(to right, #2b3467, #1D5D9B);

    }
    &:hover {
    background-color: #1D5D9B;
    }
`;

export const Triagem = styled.li `
    margin-top: 20;
    padding: 30px 20px;
    width: 100%;
    height: 5vh;
    background-color: #2b3467;
    border: none;
    border-bottom: 1px solid lightgray;

    &:active {
        background-image: linear-gradient(to right, #2b3467, #1D5D9B);
    
        }
    &:hover {
        background-color: #1D5D9B;
        }
`;

export const Home = styled.li `
    margin-top: 0;
    padding: 30px 20px;
    width: 100%;
    height: 5vh;
    background-color: #2b3467;
    border: none;
    border-bottom: 1px solid lightgray;
    border-top: 1px solid lightgray;
    &:active {
        background-image: linear-gradient(to right, #2b3467, #1D5D9B);
    
        }
    &:hover {
        background-color: #1D5D9B;
        }
`;

export const Student = styled.li `
    margin-top: 30;
    padding: 30px 20px;
    width: 100%;
    height: 5vh;
    background-color: #2b3467;
    border: none;
    border-bottom: 1px solid lightgray;

    &:active {
        background-image: linear-gradient(to right, #2b3467, #1D5D9B);
    
        }
    &:hover {
        background-color: #1D5D9B;
        }
`;

export const Anamnese = styled.li `
    margin-top: 40;
    padding: 30px 20px;
    width: 100%;
    height: 5vh;
    background-color: #2b3467;
    border: none;
    border-bottom: 1px solid lightgray;

    &:active {
        background-image: linear-gradient(to right, #2b3467, #1D5D9B);
    
        }

    &:hover {
        background-color: #1D5D9B;
        }
`;

export const Img= styled.img `
    margin: 5px;
    margin-right: 20px;
    margin-bottom: -20px;
    height: 25px;
    position: relative;
    bottom: 15px;
`;

