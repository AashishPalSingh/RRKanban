import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';
import rootReducer from './reducers';
import './index.scss';
/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
/* eslint-enable */
import './index.scss';
import { Provider } from 'react-redux';
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
); */
const init=function(element){
  ReactDOM.render(
 <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById(element),
  );
}
export const createBoard = init;
