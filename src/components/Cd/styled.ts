import styled from "@emotion/styled";

export const CdContainer = styled.div`
`

export const Cd = styled.div<{backgroundColor: string}>`
    border: 140px solid ${props => props.backgroundColor};
    border-radius: 200px;
    height:70px;
    width:70px;
`