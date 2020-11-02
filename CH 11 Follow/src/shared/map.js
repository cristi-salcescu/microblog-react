function createMapById(list){
    const map = new Map();
    list.forEach(user => {
        map.set(user.id, user);
    });
    return map;
}

export {
    createMapById
}