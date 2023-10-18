import axios from "axios";

const auth = localStorage.getItem('auth')

const baseURL = "http://134.0.116.26:5552/api"

const apiAuth = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + auth}
});

export default apiAuth