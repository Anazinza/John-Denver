import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const idScale = keyframes`
    100% { font-size: 55px }
`
const nameScale = keyframes`
    100% { font-size: 70px; font-weight: bold; }
`
const titleScale = keyframes`
    100% { font-size: 40px }
`

export const JungContainer = styled.div`
    border-top: 1px solid white;
    padding-top: 20px;
    width: 1100px;
    height: 60px;
    column-gap: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: font-size 1s;

    &:hover {
        & .id {
            animation: ${idScale} .5s forwards;
        }
        & .name {
            animation: ${nameScale} .5s forwards;
        }
        & .emo {
            animation: ${titleScale} .5s forwards;
        }
    }
`

export const Id = styled.label`
    font-size: 35px;
    cursor: pointer;
`

export const Title = styled.label`
    font-size: 50px;
    cursor: pointer;
`

export const Emotion = styled.label`
    font-size: 20px;
    cursor: pointer;
`
