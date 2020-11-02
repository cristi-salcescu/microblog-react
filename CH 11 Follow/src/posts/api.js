import axios from 'axios';
import { getData, getAuthorizationHeader } from '../shared/api';

const baseUrl = 'http://localhost:3001';

function fetchPosts(userId, followingIds, token){
    const followingRequest = followingIds.length
        ? `&userId=${followingIds.join('&userId=')}`
        : ''

    return axios.get(`${baseUrl}/posts?userId=${userId}${followingRequest}`, getAuthorizationHeader(token))
        .then(getData);
}

function addPost(data, token){
    return axios
        .post(`${baseUrl}/posts`, 
            data, 
            getAuthorizationHeader(token));
}

function deletePost(id, token){
    return axios
        .delete(`${baseUrl}/posts/${id}`, 
            getAuthorizationHeader(token));
}
 
export default { fetchPosts, addPost, deletePost };