import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://localhost:5180", //bakc-end RollForge.Api
    headers: {
        "Content-Type": "application/json",
    },

});