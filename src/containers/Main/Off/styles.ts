import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const OffContainer = styled.div`
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

export const Inner = styled.div`
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
    margin-top: 70%;
`

export const CdContainer = styled.div`
    background-color: #676767;
    position: fixed;
    width: 100%;
    height: 150px;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Cds = styled.div`
    display: flex;
    flex-direction: row;
    /* width: 100%; */
    overflow-x: scroll;
`