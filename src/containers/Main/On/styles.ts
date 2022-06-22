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

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`

export const WriteBtn = styled.button`
  margin-top: 10%;
  width: 200px;
  font-weight: bold;
  font-size: 18px;
  background-color: #333333;
  color: white;
  cursor: pointer;
  height: 40px;
  transition: font-size .5s;

  &:hover {
    font-size: 23px;
  }
`