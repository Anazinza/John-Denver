import styled from "@emotion/styled";

export const CdContainer = styled.div`
`

export const Cd = styled.div<{backgroundColor: string}>`
    border: 150px solid ${props => props.backgroundColor};
    border-radius: 200px;
    height:70px;
    width:70px;
    cursor: pointer;
    position: relative;
    transition: bottom .3s;
    bottom: 0px;

    &:hover {
        bottom: 70px;
    }
`