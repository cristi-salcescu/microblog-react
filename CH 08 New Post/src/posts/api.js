import axios from 'axios';
import { getAuthorizationHeader } from '../shared/api';

const baseUrl = 'http://localhost:3001';

function addPost(data, token){
    return axios
        .post(`${baseUrl}/posts`, data, getAuthorizationHeader(token));
}
 
export default { 
    addPost 
};