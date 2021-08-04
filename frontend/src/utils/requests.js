import axios from "axios";

const { NODE_ENV } = process.env;
let API;

if (NODE_ENV === "development") {
  API = "http://localhost:4000/api/songs";
}

const get = (path) => {
  return axios.get(`${API}${path}`);
};

const post = (path, data) => {
  return axios.post(`${API}${path}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { get, post };
