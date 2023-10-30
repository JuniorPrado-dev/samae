import styled from "styled-components";

export const Main = styled.main`
    background: linear-gradient(to top, #2b3460, #1D5D9B);
    height: 100vh;
    width: 100%;
`
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    height: 100vh;
    width: 100vw;
`
export const CardWelcome = styled.div`
    display: block;
    height: 100vh;
    width: 100%;
    transition: 1s;
`
export const Card = styled.div`
    display: none;
    height: 100vh;
    width: 100%;
    background-color: white;
    transition: 1s;
`