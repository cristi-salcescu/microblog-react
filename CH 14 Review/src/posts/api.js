import axios from 'axios';
import { getData, header } from '../shared/api';

const baseUrl = 'http://localhost:3001';

function fetchPosts(userId, followingIds, token){
    const followingRequest = followingIds.length
        ? `&userId=${followingIds.join('&userId=')}`
        : ''

    return axios.get(`${baseUrl}/posts?userId=${userId}${followingRequest}`, header(token))
        .then(getData);
}

function addPost(data, token){
    return axios
        .post(`${baseUrl}/posts`, data, header(token));
}

function deletePost(id, token){
    return axios
        .delete(`${baseUrl}/posts/${id}`, header(token));
}
 
export default { fetchPosts, addPost, deletePost };