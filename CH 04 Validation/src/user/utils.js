function getAvatarTitle(fullName){
    const names = fullName.split(' ');
    const letters = names.map(name => name.charAt(0));
    return letters.join('');
}

export {
    getAvatarTitle
}
