import Axios from "axios";

const baseApiUrl = document.head.querySelector("meta[name=baseApiUrl]").content;
const appId = document.head.querySelector("meta[name=appId]").content;
const api = Axios.create({ baseURL: baseApiUrl + appId });
const token = process.env.VUE_APP_API_KEY;
api.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;

export default api;
