import styled from "styled-components";

export const Nav = styled.nav `
    display: flex;
    flex-direction: row;
    background-color: #1D5D9B;
    text-align: left;
    margin: 0;
    width: 100%;
    justify-content: space-between;
    position: sticky;
    top: 0;
    
    @media (max-width: 550px){
        flex-direction: column;
        align-items: flex-start;
        display: none;
        width: 100%;
        margin-bottom: 0.25rem;
    }
`;

export const Agenda = styled.li `
    display: flex;
    flex-wrap: no-wrap; 
    margin-top: 0;
    padding: 30px 20px;
    width: 20vw;
    height: 5vh;
    background-color: transparent;
    border: none;
    list-style-type: none;

    &:active {
        background-image: linear-gradient(to left, #2b3467, #1D5D9B);
    }

    &:hover {
        background-color: #2b3467;
    }

    @media (max-width: 550px){
        width: 100vw;
    }
`;

export const Triagem = styled.li `
    display: flex;
    flex-wrap: no-wrap;
    margin-top: 20;
    padding: 30px 20px;
    width: 20vw;
    height: 5vh;
    background-color: transparent;
    border: none;
    list-style-type: none;

    &:active {
        background-image: linear-gradient(to left, #2b3467, #1D5D9B);
    
    }
    &:hover {
        background-color: #2b3467;
    }

    @media (max-width: 550px){
        width: 100vw;
    }
`;

export const Home = styled.li `
    display: flex;
    flex-wrap: no-wrap;
    margin-top: 0;
    padding: 30px 20px;
    width: 20vw;
    height: 5vh;
    background-color: transparent;
    border: none;
    list-style-type: none;

    &:active {
        background-image: linear-gradient(to left, #2b3467, #1D5D9B);
    
    }
    &:hover {
        background-color: #2b3467;
    }

    @media (max-width: 550px){
        width: 100vw;
    }
`;

export const Student = styled.li `
    display: flex;
    flex-wrap: no-wrap;
    margin-top: 30;
    padding: 30px 20px;
    width: 20vw;
    height: 5vh;
    background-color: transparent;
    border: none;
    list-style-type: none;

    &:active {
        background-image: linear-gradient(to left, #2b3467, #1D5D9B);
    
    }
    &:hover {
        background-color: #2b3467;
    }

    @media (max-width: 550px){
        width: 100vw;
    }
`;

export const Anamnese = styled.li `
    display: flex;
    flex-wrap: no-wrap;
    margin-top: 40;
    padding: 30px 20px;
    width: 20vw;
    height: 5vh;
    background-color: transparent;
    border: none;
    list-style-type: none;

    &:active {
        background-image: linear-gradient(to left, #2b3467, #1D5D9B);
    }

    &:hover {
        background-color: #2b3467;
    }

    @media (max-width: 550px){
        width: 100vw;
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