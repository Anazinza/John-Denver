import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const OffContainer = styled.div`
`

const slideUp = keyframes`
    from {
        bottom: 10px;
    }

    50% {
        bottom: 40px;
    }

    to {
        bottom: 10px;
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

export const Text = styled.label`
    font-size: 23px;
`

export const YearContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`