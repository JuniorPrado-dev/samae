import React from 'react';
import './topbarcss';
import { Div, ButtonHide, Line, Img } from './topbarcss';
import Logo from '../../img/samae_logo.png';

function Onclick () {
    const nav = document.querySelector('#nav');

    if (nav.style.display === 'flex') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'flex'
    }
}

export const Topbar = () => {
    return (
        <Div>
            <ButtonHide onClick={Onclick}>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </ButtonHide>
            <Img src={Logo} />
        </Div>

    )

}