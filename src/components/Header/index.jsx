import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Log.svg";
import { ReactComponent as DefaultProFile } from "../../assets/profile_none.svg";

const Header = ({ tab, onClick }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Logo onClick={() => navigate("/main")} />
        <DefaultProFile />
        {/* MenuTab */}
      </Container>
      <Menu>
        <MenuItem
          selected={tab === "모든 로그"}
          onClick={() => onClick("모든 로그")}
        >
          모든로그
        </MenuItem>
        <MenuItem selected={tab === "북마크"} onClick={() => onClick("북마크")}>
          북마크
        </MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  width: 100vw;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const Menu = styled.div`
  display: flex;
  width: 100vw;
  padding: 0px 20px;
`;

const MenuItem = styled.button`
  display: flex;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex: 1 0 0;
  color: ${(props) =>
    props.selected ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.25)"};
  border-bottom: ${(props) => (props.selected ? "2px solid #ffffff" : "none")};
  transition: color 0.3s, border-bottom 0.3s;
`;
