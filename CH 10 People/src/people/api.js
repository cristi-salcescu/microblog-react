import axios from 'axios';
import { getData, getAuthorizationHeader } from '../shared/api';

const baseUrl = 'http://localhost:3001';

function fetchOtherUsers(excludedId, text, token){
    const nameQuery = text ? `&name_like=${text}` : '';
    return axios
        .get(`${baseUrl}/users?id_ne=${excludedId}${nameQuery}`, getAuthorizationHeader(token))
        .then(getData);
}
 
export default {
    fetchOtherUsers
};