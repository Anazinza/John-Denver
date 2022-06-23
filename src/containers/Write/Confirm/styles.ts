import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const moveToTop = keyframes`
    from { transform: translateY(100%); opacity:0 }
    to {opacity: 1}
`

export const ConfirmContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    

    animation: ${moveToTop} 1s linear;
`

export const PowerContainer = styled.div`
    cursor: pointer;
`

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Text = styled.label`
    font-size: 30px;
    color: white;
`
