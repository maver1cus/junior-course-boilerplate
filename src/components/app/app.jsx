import React from 'react';
import Products from '../products/products';

const App = (props) => {
  return (
    <div className="app">
      <Products products={props.products}/>
    </div>
  );
};

export default App;
