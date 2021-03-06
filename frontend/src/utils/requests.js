import axios from "axios";

const { NODE_ENV } = process.env;
let API;

if (NODE_ENV === "development") {
  API = "http://localhost:4000/api/songs";
}

const get = async (path) => await axios.get(`${API}${path}`);

const post = async (path, data) =>
  await axios.post(`${API}${path}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

const put = async (path, data) =>
  await axios.put(`${API}${path}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

const remove = async (path, data) =>
  await axios.delete(`${API}${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export { get, post, put, remove };
