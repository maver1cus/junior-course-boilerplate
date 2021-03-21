import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from '../products/products';
import Title from '../title/title';
import Filter from '../filter/filter';
import logRender from '../log-render/log-render';
import { maxBy, minBy } from 'csssr-school-utils';
import s from './app.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: props.products,
      maxPrice: maxBy(obj => obj.price, props.products).price,
      minPrice: minBy(obj => obj.price, props.products).price,
      discount: minBy(obj => obj.discount, props.products).discount
    }

    this.handleChangeFilterInput = this.handleChangeFilterInput.bind(this);
  }

  handleChangeFilterInput(name, value) {
    this.setState({[name]: value})
  }

  filterProducts = (products, minPrice, maxPrice, discount) => {

    return products
      .filter(({ price }) => price >= minPrice && price <= maxPrice)
      .filter(product => product.discount >= discount);
  }

  render() {
    const {products, minPrice, maxPrice, discount} = this.state;

    return (
      <div className={s.app}>
        <header className={s.header}><Title /></header>
        <aside className={s.column}>
          <Filter
              maxPrice={this.state.maxPrice}
              minPrice={this.state.minPrice}
              discount={this.state.discount}
              handleChangeFilterInput={this.handleChangeFilterInput}
          />
        </aside>
        <main>
          <Products products={this.filterProducts(products, minPrice, maxPrice, discount)}/>
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

export default logRender(App);
