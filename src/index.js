import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import store from './store/index'
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
