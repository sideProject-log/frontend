import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Log.svg";
import { ReactComponent as DefaultProFile } from "../../assets/profile_none.svg";

const Header = ({ tab, onClick, profile }) => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate("/main");
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤 효과 적용 (선택 사항)
    });
  };

  return (
    <Wrapper>
      <Container>
        <Logo onClick={onLogoClick} style={{ cursor: "pointer" }} />
        {profile ? (
          <ProfileWrapper
            onClick={() => navigate("/my")}
            style={{
              backgroundImage: `url(${profile})`,
              backgroundSize: "contain",
              cursor: "pointer",
            }}
          ></ProfileWrapper>
        ) : (
          <DefaultProFile style={{ cursor: "pointer" }} />
        )}
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

const Menu = styled.div`
  display: flex;
  width: 100%;
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

const ProfileWrapper = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 36px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;
