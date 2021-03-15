import React from 'react';
import Products from '../products/products';
import PropTypes from 'prop-types';
import s from './app.module.css';

const App = (props) => {
  return (
    <div className={s.app}>
      <Products products={props.products}/>
    </div>
  );
};

App.propTypes = {
  products: PropTypes.array
};

App.defaultProps = {
  products: []
};

export default App;
