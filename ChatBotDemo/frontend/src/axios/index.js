import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const postUserMsg = async ({ id, msg }) => {
  try {
    // bura "/" bunun yerine hansi path olacaq onu yazin
    const { data } = await instance.post("api/", { id: id, msg: msg });
    console.log(data);
    return data.message;
  } catch (error) {
    throw error;
  }
};
