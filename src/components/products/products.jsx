import React from 'react';
import Title from '../title/title';
import List from '../list/list';

const MAX_COUNT_PRODUCTS_TO_SHOW = 3;

const Products = (props) => {
  const productsToShow = props.products.slice(0, MAX_COUNT_PRODUCTS_TO_SHOW);

  return (
    <div className="products-card">
      <Title />
      <List>
        {
          productsToShow.map(({ id, name }) => (
            <li className="products-card__item" key={id}>{name}</li>
          ))
        }
      </List>
    </div>
  );
};

export default Products;
