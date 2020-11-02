function header(token){
    return {
        headers: {
            authorization: `Bearer ${token}`
        }
    };
}

function getData(response){
    return response.data;
}

function getFirst(arr){
    return arr[0];
}
 
export { 
    getData,
    getFirst,
    header 
};