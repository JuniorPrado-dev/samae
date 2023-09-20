import styled from 'styled-components'

export const DivLogin = styled.div`
    background: linear-gradient(#2b3467, #1597bb);
    background-size: cover;
    height: 100vh;
    color: lightgray;
    margin: auto;
    text-align: center;
`;

export const Logo = styled.img`
    margin-top: 20vh;
    height: 100px;
`;

export const P = styled.p`
    margin: 20px;
`;

export const Buttons = styled.div`
    margin: auto;
    display: flex;
    width: 30%;
    justify-content: space-around;
`;
export const Button = styled.button`
    padding: 20px;
    border-radius: 20px;
    transition: 500ms;
    
    &:hover {
        font-size: 20px;
        transition: 500ms;
    }
`;