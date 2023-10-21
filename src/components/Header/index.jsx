import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <Header>
      <div>Logo</div>
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
  padding: 24px 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
