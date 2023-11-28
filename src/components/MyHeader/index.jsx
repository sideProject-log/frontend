import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Log.svg";
import { ReactComponent as SettingIcon } from "../../assets/setting.svg";

const Header = ({ isCurrentUser }) => {
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
    <MyContainer>
      <HeaderContainer>
        <Wrapper>
          <Flexbox>
            <Container>
              <Logo onClick={onLogoClick} style={{ cursor: "pointer" }} />
              {isCurrentUser && (
                <SettingIcon
                  onClick={onSettingClick}
                  style={{ cursor: "pointer" }}
                />
              )}
            </Container>
          </Flexbox>
        </Wrapper>
      </HeaderContainer>
    </MyContainer>
  );
};

export default Header;

const MyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.bg.bg_surface};
  max-width: 414px;
  width: 100%;
  z-index: 100;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const Flexbox = styled.div`
  width: 320px;
`;

const Container = styled.div`
  display: flex;
  padding: 16px 0px 16px 0px;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
