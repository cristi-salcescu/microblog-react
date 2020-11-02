function load() {
    const serializedState = sessionStorage.getItem('state');

    return (serializedState !== null) 
    ? JSON.parse(serializedState)
    : undefined;
}
  
function save(state){
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
}

export default {
  load,
  save
}