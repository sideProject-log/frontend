import React from "react";
import { ReactComponent as GeerSpinner } from "../../assets/geer_spinner.svg";
import styled from "styled-components";

const LoadingSpinner = () => {
  return (
    <Wrapper>
      <Container>
        <GeerSpinner />
      </Container>
    </Wrapper>
  );
};

export default LoadingSpinner;

const Wrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7d7771;
`;
const Container = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 70px;
    height: 70px;
  }
`;
