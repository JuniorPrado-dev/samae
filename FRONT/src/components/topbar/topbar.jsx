import React from 'react';
import './topbarcss';
import { Div, ButtonHide, Line, Img, BtnEntrar } from './topbarcss';
import Logo from '../../img/samae_logo.png';
import { LoginP } from '../login/loginTeacher';
import { Link } from 'react-router-dom';

function Onclick() {
    const nav = document.querySelector('#nav');
    const buttonHide = document.querySelector('#hide');

    if (nav.style.display === 'flex') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'flex'
    }
}

function Entrar() {
    <LoginP/>

}
export const Topbar = () => {
    return (
        <Div>
            <ButtonHide id='hide' onClick={Onclick}>
                <Line/>
                <Line/>
                <Line/>
            </ButtonHide>
            <Img src={Logo} />
            <Link to="/login-teacher">
                <BtnEntrar onClick={Entrar}>Entrar</BtnEntrar>
            </Link>
        </Div>

    )

}
