import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: process.env.REACT_APP_API_TIMEOUT || 3000
});

export const AutoCompleteAPI = (term) => {
    return API.get(`/search?q=${term}`);
}

export default API;