import React from "react";
import styled from "styled-components";
import { ReactComponent as More } from "../../assets/More.svg";
import { ReactComponent as Back } from "../../assets/back_icon.svg";
import { useNavigate } from "react-router-dom";

const DetailHeader = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <Header>
      <Container>
        <button style={{ padding: 0 }} type="button" onClick={onClickBack}>
          <Back />
        </button>
        <div>
          <button style={{ padding: 0 }}>
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
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Container = styled.div`
  padding: 16px 0;
  width: 320px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
