import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Back } from "../../assets/Back.svg";

const SettingHeader = ({ tab, onClick }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Back onClick={() => navigate(-1)} />
      </Container>
    </Wrapper>
  );
};

export default SettingHeader;

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
