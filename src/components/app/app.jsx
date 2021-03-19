import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from '../products/products';
import Title from '../title/title';
import Filter from '../filter/filter';
import logRender from '../log-render/log-render';
import { maxBy, minBy, toInt } from 'csssr-school-utils';
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
  }

  handleChangeFilterInput = (evt) => {
    evt.preventDefault();
    const value = toInt(evt.target.value) || 0;
    const nameFilter = evt.target.name
    this.setState({[nameFilter]: value})
  }

  filterProducts = () => {
    const {minPrice, maxPrice, discount} = this.state;

    return this.props.products
      .filter(({ price }) => price >= minPrice && price <= maxPrice)
      .filter(product => product.discount >= discount);
  }

  render() {
    const products = this.filterProducts();

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
