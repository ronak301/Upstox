import axios from "axios";

export const API_BASE_URL = "https://run.mocky.io/";

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use((request) => {
  // console.log("Starting Request", JSON.stringify(request, null, 2));
  return request;
});

client.interceptors.response.use((response) => {
  // console.log("Response:", JSON.stringify(response, null, 2));
  return response;
});

export default client;
