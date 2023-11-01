import styled from "styled-components";

export const Radio = styled.input`
    margin-left: 10px;
    margin-right: 3px;
    appearance: none;
    height: 15px;
    width: 15px;
    background: #cbd1d8;
    border: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    outline: none;
    border-radius: 50%;

    &:checked{
        background: linear-gradient(to top, #2b3467, #1597bb);
    }
`
