import axios from "axios";

const api = axios.create({
    baseURL: "https://api.interviewboom.com/api",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 4000,
});

export default api;
