import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import babyStepsReducer from './reducers/babyStepsReducer';

const store = createStore(babyStepsReducer, applyMiddleware(thunk));
const BASE_URL = "http://localhost:4000";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
