import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from 'csssr-school-product-card'
import {formatMoney} from 'csssr-school-utils'
import logRender from '../log-render/log-render';
import List from '../list/list';
import Rating from '../rating/rating';
import s from './products.module.css';

const PATH_TO_IMAGES = '/img/';

class Products extends Component {
  formatPrice = (price) => {
    return price
      ? <span className={s.price}>{formatMoney(price, 0, '.', ' ')} ₽</span>
      : ''
  }

  paymentSubPrice = (price, discount) => {
    if (!Number.isInteger(discount) || discount <= 0) {
      return ''
    }

    const subPrice = (price * 100) / (100 / discount);
    return <span className={s.subPrice}>{formatMoney(subPrice, 0, '.', ' ')} ₽</span>
  }

  render() {
    return (
      <div className={s['products-card']}>
        <List>
          {
            this.props.products.map(({ id, title, isInStock, img, rating, maxRating, price, discount }) => (
                <li className={s.item} key={id}>
                  <Product
                    isInStock={isInStock}
                    img={PATH_TO_IMAGES + img}
                    title={title}
                    price={this.formatPrice(price)}
                    subPriceContent={this.paymentSubPrice(price, discount)}
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
