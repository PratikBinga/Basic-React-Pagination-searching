import axios from "axios";

export const apiObj = axios.create({
  baseURL: "https://reqres.in/api",
});

export const getUsers = async (pageParam) => {
  const response = await apiObj.get(`/users?page=${pageParam}`);
  return response.data;
};
