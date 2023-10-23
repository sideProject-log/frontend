import axios from "axios";

export const registerBookmark = async (recordId) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/bookmark/register`,
    {
      recordId,
    },
    { withCredentials: true }
  );
  return response;
};

export const removeBookmark = async (recordId) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API_URL}/api/bookmark/delete/${recordId}`,

    { withCredentials: true }
  );
  return response;
};
