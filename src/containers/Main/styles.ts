import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const MainContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100vw;
`

export const Outer = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const OffContainer = styled.div`
`

const slideUp = keyframes`
    from {
        margin-top: 20px;
    }

    50% {
        margin-top: 50px;
    }

    to {
        margin-top: 20px;
    }
`

export const Inner = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    animation-duration: 2s;
    animation-name: ${slideUp};
    animation-iteration-count: infinite;
`

export const Text = styled.label`
    font-size: 23px;
`

export const OnContainer = styled.div`
`

export const JungsContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    height: 500px;
    overflow-y: scroll;
`