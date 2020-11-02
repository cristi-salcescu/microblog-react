import axios from 'axios';
import { getData, getFirst, getAuthorizationHeader } from '../shared/api';

const baseUrl = 'http://localhost:3001';

function addFollower(data, token){
    return axios
        .post(`${baseUrl}/followers`, data, getAuthorizationHeader(token));
}

function fetchFollowingItem(userId, followerId, token){
    return axios
        .get(`${baseUrl}/followers?userId=${userId}&followerId=${followerId}`, getAuthorizationHeader(token))
        .then(getData)
        .then(getFirst);
}

function deleteFollowingItem(id, token){
    return axios
        .delete(`${baseUrl}/followers/${id}`, getAuthorizationHeader(token));
}

function fetchFollowers(userId, token){
    return axios
    .get(`${baseUrl}/followers?userId=${userId}`, getAuthorizationHeader(token))
    .then(getData)
}

function fetchFollowing(userId, token){
    return axios
    .get(`${baseUrl}/followers?followerId=${userId}`, getAuthorizationHeader(token))
    .then(getData)
}

function fetchOtherUsers(excludedId, text, token){
    const nameQuery = text ? `&name_like=${text}` : '';
    return axios
        .get(`${baseUrl}/users?id_ne=${excludedId}${nameQuery}`, getAuthorizationHeader(token))
        .then(getData);
}

function fetchUsersByIds(ids, token){
    const query = ids.length
    ? `&id=${ids.join('&id=')}`
    : ''

    return axios
        .get(`${baseUrl}/users?${query}`, getAuthorizationHeader(token))
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