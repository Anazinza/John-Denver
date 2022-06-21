import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const OffContainer = styled.div`
    width: 100vw;
`

const slideUp = keyframes`
    from {
        bottom: 15px;
    }

    50% {
        bottom: 40px;
    }

    to {
        bottom: 15px;
    }
`

export const SwitchContainer = styled.div`
    position: relative;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    animation-duration: 2s;
    animation-name: ${slideUp};
    animation-iteration-count: infinite;
`

export const Text = styled.label<{fontSize: string}>`
    font-size: ${props => props.fontSize};
`

export const YearContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const CdContainer = styled.div`
    background-color: #676767;
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    align-items: center;
`

export const Cds = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
`

export const Inner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`