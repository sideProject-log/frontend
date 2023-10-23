import axios from "axios";

export const getAllRecords = async () => {
  const { records } = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/record/getAll`
  );
  return records;
};

export const getRecord = async (recordId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/record/detail/${recordId}`,
    { withCredentials: true }
  );
  return response;
};
