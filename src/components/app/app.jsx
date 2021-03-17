import React, { Component } from 'react';
import Products from '../products/products';
import PropTypes from 'prop-types';
import Title from '../title/title';
import Filter from '../filter/filter';
import {maxBy, minBy} from 'csssr-school-utils'
import s from './app.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: props.products,
      maxPrice: maxBy(obj => obj.price, props.products).price,
      minPrice: minBy(obj => obj.price, props.products).price,
    }
  }

  filtrationProductsInPriceRange = (min, max) => {
    const products = this.props.products.filter(({ price }) => price >= min && price <= max)

    this.setState({
      products
    });
  }

  render() {
    const {products, maxPrice, minPrice} = this.state;

    return (
      <div className={s.app}>
        <header className={s.header}><Title /></header>
        <aside className={s.column}>
          <Filter maxPrice={maxPrice} minPrice={minPrice} filtrationProductsInPriceRange={this.filtrationProductsInPriceRange}/>
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

export default App;
