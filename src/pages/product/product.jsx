import React from 'react';
import ProductCard from 'csssr-school-product-card'
import {withRouter} from 'react-router';
import Rating from '../../components/rating/rating';
import Empty from '../../components/empty/empty';
import Title from '../../components/title/title';
import { getFormatPrice, getPaymentSubPrice } from '../../utils';
import s from './product.module.css';

const PATH_TO_IMAGES = '/img/';

const ProductPage = (props) => {
  const idProduct = +props.match.params.id;
  const currentProduct = props.products.find((item) => item.id === idProduct);

  const titlePage = currentProduct ? currentProduct.title : 'Товар не найден';

  return (
    <>
      <header className="header">
        <a href="/" className="header__link">
          <img src="/img/ic-back.svg" alt="icon-back" />
        </a>
        <Title>{titlePage}</Title>
      </header>

      <main className={s.content + ' content'}>
        {
          currentProduct
          ? <ProductCard
              className={s.card}
              isInStock={currentProduct.isInStock}
              img={PATH_TO_IMAGES + currentProduct.img}
              title={currentProduct.title}
              price={getFormatPrice(currentProduct.price)}
              subPriceContent={getPaymentSubPrice(currentProduct.price, currentProduct.discount)}
              maxRating={currentProduct.maxRating}
              rating={currentProduct.rating}
              ratingComponent={Rating}
            />
            : <Empty />

        }
      </main>
    </>
  )
};

export default withRouter(ProductPage);
