import styled from "@emotion/styled";

export const WriteContainer = styled.section`
   width: 100vw;
   display: flex;
    justify-content: center;
`

export const Inner = styled.div`
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