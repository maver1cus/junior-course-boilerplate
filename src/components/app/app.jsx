import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from '../products/products';
import Title from '../title/title';
import Filter from '../filter/filter';
import logRender from '../log-render/log-render';
import {maxBy, minBy} from 'csssr-school-utils'
import s from './app.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: props.products,
      maxPrice: maxBy(obj => obj.price, props.products).price,
      minPrice: minBy(obj => obj.price, props.products).price
    }
  }

  validPrice = (price) => {
    price = parseInt(price, 10);
    price = Number.isInteger(price) ? price : 0;
    return +price
  }

  filtrationProductsInPriceRange = (minPrice, maxPrice) => {
    minPrice = this.validPrice(minPrice) <= 0
        ? this.state.minPrice
        : minPrice;
    maxPrice = this.validPrice(maxPrice) <= 0
        ? this.state.maxPrice
        : maxPrice;

    const products = this.props.products
        .filter(({ price }) => price >= minPrice && price <= maxPrice)

    this.setState({products, minPrice, maxPrice });
  }

  render() {
    const {products} = this.state;

    return (
      <div className={s.app}>
        <header className={s.header}><Title /></header>
        <aside className={s.column}>
          <Filter
              maxPrice={this.state.maxPrice}
              minPrice={this.state.minPrice}
              filtrationProductsInPriceRange={this.filtrationProductsInPriceRange}
          />
        </aside>
        <main>
          <Products products={products}/>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  products: PropTypes.array
};

App.defaultProps = {
  products: []
};

export default logRender(App).bind(App);
