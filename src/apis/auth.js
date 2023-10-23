import axios from "axios";

export const requestIsLogin = async () => {
  const data = await axios.get(
    `${process.env.REACT_APP_API_URL}/auth/isLogin`,
    {
      withCredentials: true,
    }
  );

  return data;
};
