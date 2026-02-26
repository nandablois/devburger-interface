import styled from "styled-components";

export const ContainerButton = styled.button`
  height: 52px;
  width: 65px;
  border: 0;
  margin: 20px 20px;
  position: absolute;
  border-radius: 5px;
  background-color: ${(props) => props.theme.purple};
  font-family: ${(props) => props.theme.roadRageFont};
  font-size: 30px;
  color: ${(props) => props.theme.white}f;

  &:hover {
    background-color: #6f1086;
  }
`;
