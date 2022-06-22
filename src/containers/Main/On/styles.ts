import styled from "@emotion/styled";

export const OnContainer = styled.div`
`

export const JungsContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    height: 500px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
  };
`