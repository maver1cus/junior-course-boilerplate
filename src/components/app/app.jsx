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

  handleChangePrice = (price, nameFilter) => {
    this.setState({ [nameFilter]: price });
  }

  filtrationProductsInPriceRange = (minPrice, maxPrice) => {
    return this.props.products
      .filter(({ price }) => price >= minPrice && price <= maxPrice);
  }

  render() {
    const products = this.filtrationProductsInPriceRange(this.state.minPrice, this.state.maxPrice);

    return (
      <div className={s.app}>
        <header className={s.header}><Title /></header>
        <aside className={s.column}>
          <Filter
              maxPrice={this.state.maxPrice}
              minPrice={this.state.minPrice}
              handleChangePrice={this.handleChangePrice}
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
