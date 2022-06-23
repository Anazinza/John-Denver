import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const toVisible = keyframes`
    from {opacity: 0 }
    to { opacity: 1 }
`

const pulse = keyframes`
    0% {
        background-color: #36188B;
    }
    20% {
        background-color: #571CFF;
    }
    40% {
        background-color: #4115BF
    }
    60% {
        background-color: #351299;
    }
    80% {
        background-color: #270F6B;
    }
    90% {
        background-color: #130732;
    }
`

export const PowerOnContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    

    animation: ${toVisible} 1s linear;
`

export const Background = styled.div`
    position: fixed;
    bottom: 0px;
    width: 100vw;
    height: 100vh;
    animation: ${pulse} 4s linear;
    background-color: #000000;
    opacity: 60%;

    z-index: 2;
`