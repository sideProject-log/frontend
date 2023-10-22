import React from "react";
import styled from "styled-components";
import { ReactComponent as More } from "../../assets/More.svg";
import { ReactComponent as Back } from "../../assets/Back.svg";
import { useNavigate } from "react-router-dom";

const DetailHeader = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <Header>
      <Container>
        <div>
          <button type="button" onClick={onClickBack}>
            <Back />
          </button>
        </div>
        <div>
          <button>
            <More />
          </button>
        </div>
      </Container>
    </Header>
  );
};

export default DetailHeader;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100dvw;
  padding: 2.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Container = styled.div`
  padding: 1rem 1%;
  width: 100%;
  max-width: 80rem;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
