import React from "react";
import { requestKakaoOAuthLogin } from "../apis/auth";
import kakaoLogin from "../assets/kakao_login_medium_narrow.png";
import styled from "styled-components";

import { ReactComponent as Posting } from "../assets/intro_posting.svg";
import { ReactComponent as Kakao } from "../assets/kakao_login.svg";
import { ReactComponent as Naver } from "../assets/naver_login.svg";
import Bg from "../assets/Background.png";

const Intro = () => {
  const handleLogin = async () => {
    const data = await requestKakaoOAuthLogin();
    console.log(data);
  };

  return (
    <Cover image={Bg}>
      <Wrapper>
        <Asset>
          <Posting />
        </Asset>
        <TextWrapper>
          <div>
            <Bold>로그</Bold>
            <BigText>를</BigText>
          </div>
          <BigText>기록해보세요</BigText>
        </TextWrapper>
      </Wrapper>
      <LoginWrapper>
        <KakaoLogin
          onClick={() =>
            (window.location.href = "http://localhost:8080/auth/kakao")
          }
        >
          <Kakao />
          <SocialTitle>카카오톡으로 시작하기</SocialTitle>
        </KakaoLogin>
        <NaverLogin>
          <Naver />
          <SocialTitle style={{ color: "#FFF" }}>네이버로 시작하기</SocialTitle>
        </NaverLogin>
        <BottomText>기존 가입 경로를 통해 로그인 해주세요</BottomText>
      </LoginWrapper>
    </Cover>
  );
};

export default Intro;

const Cover = styled.div`
  background: url(${(props) => props.image});
  height: 100vh;
`;

const Asset = styled.div`
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--theme-primary, #f4ac40);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 180px;
  margin-left: 30px;
`;

const TextWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  margin-top: 24px;
`;

const Bold = styled.span`
  color: #fff;

  font-feature-settings: "clig" off, "liga" off;
  /* Title/title-extra */
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 32.5px */
  letter-spacing: -0.3px;
`;

const BigText = styled.span`
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 32.5px */
  letter-spacing: -0.3px;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  align-items: center;
  gap: 16px;
`;

const KakaoLogin = styled.div`
  display: flex;
  width: 300px;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 999px;
  background: #fee500;
  box-shadow: 0px 4px 10px 0px rgba(28, 30, 33, 0.8);
`;

const SocialTitle = styled.div`
  color: #392020;
  text-align: center;
  /* Caption/caption */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.14px;
`;

const NaverLogin = styled.div`
  display: flex;
  width: 300px;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 999px;
  background: #03c75a;
  box-shadow: 0px 4px 10px 0px rgba(28, 30, 33, 0.8);
`;

const BottomText = styled.div`
  color: var(--font-text-default, rgba(255, 255, 255, 0.65));
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%; /* 19.2px */
  letter-spacing: -0.2px;
  margin-top: 24px;
`;
