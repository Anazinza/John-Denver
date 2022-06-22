import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

export const CdContainer = styled.div`
`

interface CdPropsType {
    backgroundColor: string;
    animation: boolean;
    hover: boolean;
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

    ${props => props.hover && css`
        &:hover {
            bottom: 70px;
        }
    `}

    ${props => props.animation && css`
        animation: ${slowSpin} .001s linear infinite; 
        
        &:hover {
            animation-duration:5s;
        }
        
    ` }
    
`

export const CreatedAt = styled.div`
    color: black;
    position: absolute;
    bottom: 100px;
    /* left: 50%; */
    transform: rotate(-50deg);
    width: 200px;
    font-size: 23px;
    display:flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    
`
