import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

export const CdContainer = styled.div`
`

interface CdPropsType {
    backgroundColor: string;
    click: boolean;
}

const slowSpin = keyframes`
    100% { transform: rotate(-360deg); }
`

export const Cd = styled.div<CdPropsType>`
    border: 150px solid ${props => props.backgroundColor};
    border-radius: 200px;
    height:70px;
    width:70px;
    cursor: pointer;
    position: relative;
    transition: bottom .3s;
    bottom: 0px;

    &:hover {
        bottom: 70px;
    }
/* 
    ${props => props.click && css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);    
        animation: ${slowSpin} .2s linear infinite; 
        
        &:hover {
            animation-duration:5s;
        }
        
    ` } */
    
`