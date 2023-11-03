import React from 'react';
import './topbarcss';
import {Div, ButtonHide, Line, Img}from './topbarcss';
import Logo from '../../img/samae_logo.png';

function Onclick () {
    const nav = document.querySelector('#nav');
    const buttonHide = document.querySelector('#hide');
    
    if (nav.style.display === 'flex') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'flex'
    }
    
    buttonHide.style.background = 'linear-gradient(to bottom, #2b3467, #1D5D9B)'
}

function OnMouseOut() {
    const buttonHide = document.querySelector('#hide');
    
    buttonHide.style.background = '#1D5D9B'
}

function OnMouseEnter() {
    const buttonHide = document.querySelector('#hide');
    
    buttonHide.style.background = 'linear-gradient(to top, #2b3467, #1D5D9B)'
}

export const Topbar =  () => {
    return(
        <Div> 
             <ButtonHide id='hide' onClick={Onclick} onMouseEnter={OnMouseEnter} onMouseOut={OnMouseOut}>
                <Line onMouseEnter={OnMouseEnter} onMouseOut={OnMouseOut}></Line>
                <Line onMouseEnter={OnMouseEnter} onMouseOut={OnMouseOut}></Line>
                <Line onMouseEnter={OnMouseEnter} onMouseOut={OnMouseOut}></Line>
            </ButtonHide>
            <Img src={Logo}/>
        </Div>

    )

}
