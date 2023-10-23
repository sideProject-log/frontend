import axios from "axios";

export const requestModifyUsername = async (username) => {
  const data = await axios.patch(
    "http://localhost:8080/api/user/modify/username",
    { data: { username } },
    {
      withCredentials: true,
    }
  );

  return data;
};
