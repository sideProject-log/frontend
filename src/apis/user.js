import axios from "axios";

export const requestModifyUsername = async (username) => {
  const data = await axios.patch(
    `${process.env.REACT_APP_API_URL}/api/user/modify/username`,
    { data: { username } },
    {
      withCredentials: true,
    }
  );

  return data;
};
