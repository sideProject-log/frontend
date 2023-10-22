import axios from "axios";

export const registerComment = (recordId, comment) => {
  const response = axios.post("http://localhost:8080/api/comments/register", {
    recordId,
    comment,
  });
  return response;
};
