import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Log.svg";
import { ReactComponent as SettingIcon } from "../../assets/setting.svg";

const Header = ({ tab, onClick, profile }) => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate("/main");
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤 효과 적용 (선택 사항)
    });
  };

  const onSettingClick = () => {
    navigate("/setting");
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤 효과 적용 (선택 사항)
    });
  };

  return (
    <Wrapper>
      <Container>
        <Logo onClick={onLogoClick} style={{ cursor: "pointer" }} />
        <SettingIcon onClick={onSettingClick} style={{ cursor: "pointer" }} />
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.bg.bg_surface};
  z-index: 100;
`;

const Container = styled.div`
  display: flex;
  min-width: 414px;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
