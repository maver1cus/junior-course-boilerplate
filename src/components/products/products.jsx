import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from 'csssr-school-product-card'
import logRender from '../log-render/log-render';
import List from '../list/list';
import Rating from '../rating/rating';
import s from './products.module.css';
import { getFormatPrice, getPaymentSubPrice } from '../../utils';

const PATH_TO_IMAGES = '/img/';

class Products extends Component {
  render() {
    return (
      <div className={s['products-card']}>
        <List>
          {
            this.props.products.map(({ id, title, isInStock, img, rating, maxRating, price, discount }) => (
                <li className={s.item} key={id}>
                  <ProductCard
                    isInStock={isInStock}
                    img={PATH_TO_IMAGES + img}
                    title={title}
                    price={getFormatPrice(price)}
                    subPriceContent={getPaymentSubPrice(price, discount)}
                    maxRating={maxRating}
                    rating={rating}
                    ratingComponent={Rating}
                  />
                </li>
              )
            )
          }
        </List>
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array
};

Products.defaultProps = {
  products: []
};

export default logRender(Products);
