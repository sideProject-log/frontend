import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Back } from "../../assets/Back.svg";

const ModifyUsernameHeader = ({ tab, onClick }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Back onClick={() => navigate(-1)} />
        <Complete>
          <button className="complete" type="button">
            <p className="button-name">확인</p>
          </button>
        </Complete>
      </Container>
    </Wrapper>
  );
};

export default ModifyUsernameHeader;

const Container = styled.div`
  display: flex;
  width: 100vw;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.bg.bg_surface};
  z-index: 100;
`;

const Complete = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;

  .complete {
    width: 42px;
    height: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .button-name {
    width: 36px;
    height: 22px;
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.95);
  }
`;
