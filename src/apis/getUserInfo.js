import axios from "axios";

export const getUserInfo = async () => {
  try {
    const userResponse = await axios.get(
      `${process.env.REACT_APP_API_URL}/auth/isLogin`,
      { withCredentials: true }
    );
    if (!userResponse.data.result) {
      window.location.href = "/";
    }
    const userData = userResponse;

    console.log(userData);

    return userData;
  } catch (error) {
    console.error("API 호출 오류:", error);
  }
};
