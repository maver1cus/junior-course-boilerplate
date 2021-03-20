import React from 'react';
import PropTypes from 'prop-types';
import Product from 'csssr-school-product-card'
import List from '../list/list';
import Rating from '../rating/rating';
import {formatMoney} from 'csssr-school-utils'
import s from './products.module.css';

const PATH_TO_IMAGES = '/img/';

const Products = (props) => {
  const formatPrice = (price) => {
    return price
      ? <span className={s.price}>{formatMoney(price, 0, '.', ' ')} ₽</span>
      : ''
  }

  const paymentSubPrice = (price, discount) => {
    if (!Number.isInteger(discount) || discount <= 0) {
      return ''
    }

    const subPrice = (price * 100) / (100 / discount);

    return <span className={s.subPrice}>{formatMoney(subPrice, 0, '.', ' ')} ₽</span>
  }

  return (
    <div className="products-card">
      <List>
        {
          props.products.map(({ id, title, isInStock, img, rating, maxRating, price, discount }) => (
              <li className={s.item} key={id}>
                <Product
                  isInStock={isInStock}
                  img={PATH_TO_IMAGES + img}
                  title={title}
                  price={formatPrice(price)}
                  subPriceContent={paymentSubPrice(price, discount)}
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
};

Products.propTypes = {
  products: PropTypes.array
};

Products.defaultProps = {
  products: []
};

export default Products;
