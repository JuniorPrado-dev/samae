import styled, { css } from "styled-components";

//css
const formContainer = css`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
`
const signIn = css`
    left: 0;
    width: 50%;
    z-index: 2;
`
const signUp = css`
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
`
const btn = css`
    border-radius: 20px;
    border: 1px solid #FF4B2B;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;

    @media (max-width: 550px){
        padding: 1em 1.5em;
        font-size: 10px;
    }

    &:active {
        transform: scale(0.95);
    }

    &:focus {
        outline: none;
    }
`
const teacher = css`
    background-color: #fff;
    border-color: #fff;
    color: #2b3460;
    transition: 500ms;
    z-index: 1;
    position: relative;
    overflow: hidden;

    &:hover{
        color: #fff;
        transition: 500ms;
    }

    &:after {
        position: absolute;
        border-radius: 20px;
        border-color: #fff;
        content: "";
        width: 100%;
        height: 0;
        top: 0;
        left: 0;
        z-index: -1;
        background: linear-gradient(to top, #2b3460, #1D5D9B);
        transition: all 0.3s ease;
    }

    &:hover:after {
        top: auto;
        bottom: 0;
        height: 100%;
    }

`
const parent = css`
    background: linear-gradient(to top, #2b3460, #1D5D9B, #3876BF); 
    color: #fff;
    border-color: #fff;
    transition: 500ms;
    z-index: 1;
    position: relative;
    overflow: hidden;

    &:hover{
        color: #2b3460;
        transition: 500ms;
        border: 1px solid #2b3460;
    }

    &:after {
        position: absolute;
        border-radius: 20px;
        content: "";
        width: 100%;
        height: 0;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: #fff;
        box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5);
        7px 7px 20px 0px rgba(0,0,0,.1),
        4px 4px 5px 0px rgba(0,0,0,.1);
        transition: all 0.3s ease;
    }

    &:hover:after {
        top: auto;
        bottom: 0;
        height: 100%;
    }
`
const overlay = css`
    background: #FF416C;
    background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
`
const overlayPanel = css`
    position: absolute;
    display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
`
const overlayLeft = css`
    left: 0;
    background: linear-gradient(to top, #2b3460 10%, #1D5D9B, #3876BF); 
    color: #fff;
`
const overlayRight = css`
    right: 0;
`
export const PanelActive = css`
    transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
`
export const returnBtn = css`
    height: 50px;
    padding: 0 13px;
    border: none;
    border-radius: 30px;
    position: relative;
    top: 20%;
    cursor: pointer;
`

//styled
export const Main = styled.main`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
`
export const Top = styled.div`
    position: relative;
    top: 35%;
    height: 100vh;
    transition: 1s;
`
export const Bottom = styled.div`
    position: relative;
    top: 60%;
    height: 100%;
    width: 100%;
    transition: 1s;
`
export const BntReturn = styled.button`
    ${returnBtn}
    background: linear-gradient(to top, #2b3460, #1D5D9B);

    &:active{
        background: linear-gradient(to bottom, #2b3460, #1D5D9B);
    }
`
export const BntBlue = styled.button`
    ${returnBtn}
    background: linear-gradient(to bottom, #fff, lightgray);

    &:active{
        background: linear-gradient(to top, #fff, lightgray);
    }
`
export const ImgReturn = styled.img`
    height: 60%;
`
export const H1 = styled.div`
    font-weight: bold;
    margin: 0;
`
export const H2 = styled.div`
    text-align: center;
`
export const Container = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
        0 10px 10px rgba(0,0,0,0.22);
    position: relative;
    overflow: hidden;
    height: 70%;
    width: 50vw;
    transform: translateX(50%);
    
    @media (max-width: 800px){
        margin-left: -30vw;
        height: 80%;      
        width: 80%; 
        border-radius: 0;     
    }
    
    @media (max-width: 700px){
        margin-left: -50vw;
        height: 100%;      
        width: 100%; 
        border-radius: 0;     
    }

    
`
export const FormAndIn = styled.div`
    ${formContainer}
    ${signIn}
`
export const FormAndUp = styled.div`
    ${formContainer}
    ${signUp}
`
export const Teacher = styled.button`
    ${btn}
    ${teacher}
`
export const Parent = styled.button`
    ${btn}
    ${parent}
`
export const P = styled.p`
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
`
export const A = styled.a`
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
`
export const Span = styled.span`
    font-size: 12px;
`
export const Form = styled.form`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
`
export const Input = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
`
export const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
`
export const PanelLeft = styled.div`
    ${overlayPanel}
    ${overlayLeft}
`
export const PanelRight = styled.div`
    ${overlayPanel}
    ${overlayRight}
`
export const SocialContainer = styled.div`
    margin: 20px 0;
`