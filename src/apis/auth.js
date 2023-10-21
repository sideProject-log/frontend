import axios from "axios";

export const requestKakaoOAuthLogin = async () => {
  const data = await axios.get("http://localhost:8080/auth/kakao");

  return data;
};
