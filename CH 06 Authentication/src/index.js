import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />  
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


