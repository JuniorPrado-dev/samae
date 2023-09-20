import styled from "styled-components";

export const Nav = styled.nav `
display: block;
margin-right: 30px;
float: left;
text-align: center;
margin-top: 0;
width: 15%;
height: 100vh;
display: block;
`;

export const ButtonNav = styled.button `
margin-top: 0;
padding: 30px 0px;
width: 100%;
height: 20vh;
background-color: #2b3467;
border: none;
border-bottom: 1px solid lightgray;

&:hover {
background-color: linear-gradient(to right, #2b3467, #1D5D9B);
}

&:focus {
background-image: linear-gradient(to right, #2b3467, #1D5D9B);
}
`;

export const Img= styled.img `
    margin: 5px;
    margin-bottom: -7px;
    height: 25px;
`;

export const ButtonHide= styled.button `
    margin: 10px 5px;
    padding: 6px;
    float: right;
    background-color: #1D5D9B;
    height: 40px;
    width: 40px;
    border: none;
    border-radius: 5px;
    
`;

export const Line= styled.div`
    margin: 3px;
    background-color: lightgray;
    border-radius: 3px;
    height: 4px;
    width: 70%;
`;