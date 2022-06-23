import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const WriteContainer = styled.section`
   width: 100vw;
   display: flex;
    justify-content: center;
`

export const Inner = styled.div<{click: boolean}>`
    width: 70%;

`

export const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    row-gap: 10px;
    margin-bottom: 20px;;
`

export const Input = styled.input`
    height: 50px;
    color: white;
    font-size: 30px;
    background-color: #333333;
    border: none;

    &::placeholder {
        color: #CECECE;
        font-size:23px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 70px;
`


const changeOpacity = keyframes`
    from { opacity: 0 }
    50% { opacity: 1 }
    to { opacity: 0 }
`

export const TextButton = styled.button`
    border: none;
    background-color: #333333;
    outline: none;
    font-size: 23px;
    color: white;
    cursor: pointer;

    animation: ${changeOpacity} 5s linear infinite;
`
