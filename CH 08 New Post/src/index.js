import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import App from './App';

import sessionStorage from './shared/sessionStorage';
import rootReducer from './rootReducer';

const persistedState = sessionStorage.load();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState
});

store.subscribe(() => {
  const state = store.getState();
  sessionStorage.save(state);
});

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />  
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


