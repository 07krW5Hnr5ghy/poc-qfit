import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWU1NzM2ZWZmYjgxZTYzOWJhMzg3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTQxMjY4NCwiZXhwIjoxNjcxNjcxODg0fQ._Vesm5o3c0FvZh7PeBnDbYP_tMawf1ituSkW8nZRVoM";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});