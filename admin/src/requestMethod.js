import axios from "axios";
import {useSelector} from 'react-redux';

const BASE_URL = "http://localhost:5000/api/";

//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
console.log(TOKEN && JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});