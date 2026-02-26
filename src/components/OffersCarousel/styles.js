import styled from "styled-components";

export const Container = styled.div`
  .carousel-item {
    padding: 40px;
  }

  overflow-x: hidden;

  .react-multi-carousel {
    overflow: visible;
  }

  padding-left: 10px;
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.green};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;

  &::after {
    content: "";
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.green};
    position: absolute;
    bottom: 0;
    left: calc(50% - 28px);
  }
`;
