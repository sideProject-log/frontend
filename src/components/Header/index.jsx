import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Log.svg";

const index = () => {
  return (
    <Header>
      <Logo />
      <div>profile</div>
    </Header>
  );
};

export default index;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100vw;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
