import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(request => {
  return request;
})

axios.interceptors.request.use(response => {
  return response;
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
