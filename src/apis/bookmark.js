import axios from "axios";

export const registerBookmark = async (recordId) => {
  const response = await axios.post(
    "http://localhost:8080/api/bookmark/register",
    {
      recordId,
    },
    { withCredentials: true }
  );
  return response;
};

export const removeBookmark = async (bookmarkId) => {
  const response = await axios.delete(
    "http://localhost:8080/api/bookmark/remove",
    {
      data: { bookmarkId },
    },
    { withCredentials: true }
  );
  return response;
};
