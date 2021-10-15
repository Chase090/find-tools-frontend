import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { toolsReducer } from './reducers/ToolsReducer';


import 'bootstrap/dist/css/bootstrap.min.css';

// set store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// applyMidleware 2nd argument pass in thunk

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
