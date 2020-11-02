import axios from 'axios';
import { getData, getFirst, header } from '../shared/api';

const baseUrl = 'http://localhost:3001';

function addFollower(data, token){
    return axios
        .post(`${baseUrl}/followers`, data, header(token));
}

function fetchFollowingItem(userId, followerId, token){
    return axios
        .get(`${baseUrl}/followers?userId=${userId}&followerId=${followerId}`, header(token))
        .then(getData)
        .then(getFirst);
}

function deleteFollowingItem(id, token){
    return axios
        .delete(`${baseUrl}/followers/${id}`, header(token));
}

function fetchFollowers(userId, token){
    return axios
    .get(`${baseUrl}/followers?userId=${userId}`, header(token))
    .then(getData)
}

function fetchFollowing(userId, token){
    return axios
    .get(`${baseUrl}/followers?followerId=${userId}`, header(token))
    .then(getData)
}

function fetchOtherUsers(excludedId, text, token){
    const nameQuery = text ? `&name_like=${text}` : '';
    return axios
        .get(`${baseUrl}/users?id_ne=${excludedId}${nameQuery}`, header(token))
        .then(getData);
}

function fetchUsersByIds(ids, token){
    const query = ids.length
    ? `&id=${ids.join('&id=')}`
    : ''

    return axios
        .get(`${baseUrl}/users?${query}`, header(token))
        .then(getData);
}
 
export default { 
    addFollower,
    fetchFollowers, 
    fetchFollowing,
    fetchFollowingItem,
    deleteFollowingItem,
    fetchOtherUsers,
    fetchUsersByIds
};