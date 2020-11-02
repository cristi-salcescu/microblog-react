import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';

import sessionStorage from './shared/sessionStorage';
import rootReducer from './rootReducer';

const persistedState = sessionStorage.load();

const store = createStore(
    rootReducer,
    persistedState, 
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );

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


