import axios from 'axios';
import { getData, getFirst, getAuthorizationHeader } from '../shared/api';

const baseUrl = 'http://localhost:3001';

function registerUser(data){
    return axios
        .post(`${baseUrl}/register`, data)
        .then(getData);
}

function login(data){
    return axios
        .post(`${baseUrl}/login`, data)
        .then(getData);
}

function fetchUser(email, token){
    return axios
        .get(`${baseUrl}/users?email=${email}`, getAuthorizationHeader(token))
        .then(getData)
        .then(getFirst);
}
 
export default { 
    registerUser, 
    login, 
    fetchUser 
};