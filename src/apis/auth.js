import axios from "axios";

export const requestIsLogin = async () => {
  const data = await axios.get("http://localhost:8080/auth/isLogin", {
    withCredentials: true,
  });

  return data;
};
