import axios from "axios";

axios.defaults.headers.common.Accept = "application/json";
axios.defaults.baseURL = "https://interviewboom.com/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

const api = axios.create({
    baseURL: "https://interviewboom.com/api",
});

export default api;
