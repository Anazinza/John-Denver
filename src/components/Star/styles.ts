import styled from "@emotion/styled";

interface StarContainerType {
    left: number;
    top: number;
}

export const StarContainer = styled.div<StarContainerType>`
    position:fixed;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    z-index: -1;

    @media (max-width: 1050px) {
        visibility: hidden;
    }
`

export const StarImg = styled.img`
`