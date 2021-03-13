import React from 'react';
import PropTypes from 'prop-types';
import Product from 'csssr-school-product-card'
import Title from '../title/title';
import List from '../list/list';
import Rating from '../rating/rating';

const PATH_TO_IMAGES = '/img/';

const Products = (props) => {
  return (
    <div className="products-card">
      <Title />
      <List>
        {
          props.products.map(({ id, isInStock, title, img, rating, maxRating, price, subPriceContent }) => (
            <li className="products-card__item" key={id}>
              <Product
                isInStock={isInStock}
                img={ PATH_TO_IMAGES + img }
                title={title}
                price={price}
                subPriceContent={subPriceContent}
                maxRating={maxRating}
                rating={rating}
                ratingComponent={Rating}
              />
            </li>
          ))
        }
      </List>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array
};

Products.defaultProps = {
  products: []
};

export default Products;
