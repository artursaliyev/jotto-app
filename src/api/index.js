import axios from "axios";

const getData = (res) => res.data;

const api = {
  fetchSecretWord: () => {
    return axios.get("http://localhost:3030").then(getData);
  },
};

export default api;
