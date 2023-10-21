import axios from "axios";

export const getAllRecords = async () => {
  const { records } = await axios.get("/api/record/getAll");
  return records;
};

export const getRecord = async (recordId) => {
  const { record } = await axios.get(`/api/record/detail/${recordId}`);
  return record;
};
