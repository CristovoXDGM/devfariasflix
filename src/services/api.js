import axios from 'axios';

const api = axios.create({
    baseURL: 'https://devfariasflix.herokuapp.com/'
});

export default api;