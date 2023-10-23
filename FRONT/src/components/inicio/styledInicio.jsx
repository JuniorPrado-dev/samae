import styled, { keyframes, css } from "styled-components";

//keyframes
const show = keyframes`
    0%, 49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%, 100% {
        opacity: 1;
        z-index: 5;
    }
`

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
    background-color: #FF4B2B;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;

    &:active {
        transform: scale(0.95);
    }

    &:focus {
        outline: none;
    }
`
const ghost = css`
    background-color: transparent;
    border-color: #FFFFFF;
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
    transform: translateX(-20%);
`
const overlayRight = css`
    right: 0;
    transform: translateX(0);
`

//styled
export const Body = styled.body`
    background: #f6f5f7;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    margin: -20px 0 50px;
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
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    transform: translateX(50%);
`
export const FormAndIn = styled.div`
    ${formContainer}
    ${signIn}
`
export const FormAndUp = styled.div`
    ${formContainer}
    ${signUp}
`
export const Button = styled.div`
    ${btn}
`
export const Ghost = styled.div`
    ${btn}
    ${ghost}
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
export const Overlay = styled.div`
    ${overlay}
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