import styled from "@emotion/styled";

interface StarContainerType {
    left: number;
    top: number;
}

export const StarContainer = styled.div<StarContainerType>`
    position:fixed;
    left: ${props => props.left}px;
    top: ${props => props.top}px;

    @media (max-width: 1050px) {
        visibility: hidden;
    }
`