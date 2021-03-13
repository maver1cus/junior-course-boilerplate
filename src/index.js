import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.css';
import products from './products.json';

ReactDOM.render(
  <App products={products}/>,
  document.getElementById('root')
)
