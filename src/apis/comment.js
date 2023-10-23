import axios from "axios";

export const registerComment = (recordId, emoji) => {
  console.log(emoji);
  const response = axios.post(
    `${process.env.REACT_APP_API_URL}/api/comments/register`,
    {
      recordId,
      emoji,
    },
    { withCredentials: true }
  );
  return response;
};
