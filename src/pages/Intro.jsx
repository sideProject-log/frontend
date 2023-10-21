import React from "react";
import { requestKakaoOAuthLogin } from "../apis/auth";
import kakaoLogin from "../assets/kakao_login_medium_narrow.png";

const Intro = () => {
  const handleLogin = async () => {
    const data = await requestKakaoOAuthLogin();
    console.log(data);
  };

  return (
    <div>
      <div>Intro</div>
      <a href="http://localhost:8080/auth/kakao">로그인</a>
      <div onClick={handleLogin}>
        <img src={kakaoLogin} alt="kakao Login" style={{ width: "15rem" }} />
      </div>
    </div>
  );
};

export default Intro;
