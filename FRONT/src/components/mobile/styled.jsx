import styled, { css } from "styled-components";

const main = css`
    display: flex;
    padding: 5vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    width: 100%;
`
export const Main = styled.main`
    ${main}
    background: linear-gradient(to top, #2b3460, #1D5D9B);
    color: #fff;
`
export const MainLogin = styled.main`
    ${main}
    background-color: #fefefe;
    color: black;
    height: 80vh;
    width: 80vw;
    border-radius: 10px;
`
export const LogoSamae = styled.img`
    margin-bottom: 10px;
    margin-right: -10px;
    height: 80px;
`
export const H1 = styled.h1`
    margin-top: 20px;
    font-family: 'REM', sans-serif;
    font-size: 20px;
    font-weight: bold;
`
export const P = styled.p`
    margin: 15px;
    font-family: 'REM', sans-serif;
    font-size: 12px;
    font-weight: normal;   
`
export const Nav = styled.nav`
    display: inline-flex;
    justify-content: space-around;
    width: 100%;
`
export const Button = styled.button`
    margin: 20px auto;
    padding: 12px 25px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    border-radius: 30px;
    border: 2px solid #fefefe;
    background-color: #fefefe;
    color: #2b3460;
    cursor: pointer;
    text-transform: uppercase;
`
//redirecionamento
export const Redirect = styled.div`
    display: none;
`
export const Back = styled.button`
    margin: auto;
    border-radius: 50px;
    border: 1px solid #1D5D9B;
    text-transform: uppercase;
    padding: 7px 10px;
    background: linear-gradient(to top, #2b3460, #1D5D9B);
    color: #fff;
    position: relative;
    top: -47vh;
    left: -33vw;
`
export const ImgBack = styled.img`
    margin-left: -1px;
    margin-bottom: -1px;
    height: 16px;

`