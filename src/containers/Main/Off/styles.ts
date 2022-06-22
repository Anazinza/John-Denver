import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const OffContainer = styled.div`
    width: 100vw;
`

const slideUp = keyframes`
    from { bottom: 15px; }

    50% { bottom: 40px; }

    to { bottom: 15px; }
`

export const SwitchContainer = styled.div`
    position: relative;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    animation-duration: 2s;
    animation-name: ${slideUp};
    animation-iteration-count: infinite;
`

export const Text = styled.label<{ fontSize: string }>`
    font-size: ${props => props.fontSize};
`

export const Outer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`

export const YearContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: -70px;
`

export const MonthContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: -70px;
`

export const CdContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 460px;
    bottom: -200px;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    overflow-x: scroll;
`

export const Inner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
