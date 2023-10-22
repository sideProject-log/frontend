import axios from "axios";

export const getAllRecords = async () => {
  const { records } = await axios.get(
    "http://localhost:8080/api/record/getAll"
  );
  return records;
};

export const getRecord = async (recordId) => {
  const response = await axios.get(
    `http://localhost:8080/api/record/detail/${recordId}`,
    { withCredentials: true }
  );
  return response;
};
