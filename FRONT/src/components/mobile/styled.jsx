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
    border-radius: 10px;
`
export const LogoSamae = styled.img`
    margin-bottom: 10px;
    margin-right: -10px;
    height: 80px;
`
export const H1 = styled.h1`
    font-family: 'REM', sans-serif;
    font-size: 20px;
    font-weight: bold;
`
export const P = styled.p`
    margin: 10px;
    font-family: 'REM', sans-serif;
`
export const Nav = styled.nav`
    display: inline-flex;
    justify-content: space-around;
    width: 100%;
`
export const Button = styled.button`
    margin: 10px 0;
    padding: 15px 30px;
    text-align: center;
    font-weight: bold;
    border-radius: 30px;
    border: 2px solid #2b3460;
    background-color: #fefefe;
    color: #2b3460;
    cursor: pointer;
`
//redirecionamento
export const Redirect = styled.div`
    display: none;
`
export const Back = styled.button`
    border-radius: 20px;
    border: 1px solid #1D5D9B;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    background: linear-gradient(to top, #2b3460, #1D5D9B);
    text-transform: uppercase;
    color: #fff;
`