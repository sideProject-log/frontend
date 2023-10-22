import axios from "axios";

export const registerComment = (recordId, emoji) => {
  console.log(emoji);
  const response = axios.post(
    "http://localhost:8080/api/comments/register",
    {
      recordId,
      emoji,
    },
    { withCredentials: true }
  );
  return response;
};
