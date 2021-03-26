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
      discount: minBy(obj => obj.discount, props.products).discount,
      selectedCategories: this.getAllCategories(props.products),
      categories: this.getAllCategories(props.products)
    }

    this.handleChangeFilterInput = this.handleChangeFilterInput.bind(this);
    this.handleSelectedCategory = this.handleSelectedCategory.bind(this);
    this.handleResetFilters = this.handleResetFilters.bind(this);
  }

  handleChangeFilterInput(name, value) {
    this.setState({[name]: value})
  }

  handleSelectedCategory(selectedCategory) {
    const { selectedCategories } = this.state;

    selectedCategories.includes(selectedCategory)
      ? this.setState({ selectedCategories: selectedCategories.filter(category => category !== selectedCategory) })
      : this.setState({ selectedCategories: [...selectedCategories, selectedCategory] })
  }

  handleResetFilters() {
    const { products } = this.state;

    this.setState({
      maxPrice: maxBy(obj => obj.price, products).price,
      minPrice: minBy(obj => obj.price, products).price,
      discount: minBy(obj => obj.discount, products).discount,
      selectedCategories: this.getAllCategories(products)
    })
  }

  filterProducts = (products, minPrice, maxPrice, discount, selectedCategories) => {
    return products
      .filter((product) => {
        return  product.price >= minPrice &&
          product.price <= maxPrice &&
          product.discount >= discount &&
          selectedCategories.some(category => product.category.indexOf(category) >= 0)
      })
  }

  getAllCategories(products) {
    const categories = products
      .reduce((acc, product) => acc.concat(product.category), []);

    return Array.from(new Set(categories));
  }

  render() {
    const {products, minPrice, maxPrice, discount, selectedCategories} = this.state;

    return (
      <div className={s.app}>
        <header className={s.header}><Title /></header>
        <aside className={s.column}>
          <Filter
              maxPrice={this.state.maxPrice}
              minPrice={this.state.minPrice}
              discount={this.state.discount}
              categories={this.state.categories}
              selectedCategories={this.state.selectedCategories}
              handleChangeFilterInput={this.handleChangeFilterInput}
              handleSelectedCategory={this.handleSelectedCategory}
              handleResetFilters={this.handleResetFilters}
          />
        </aside>
        <main>
          <Products products={this.filterProducts(products, minPrice, maxPrice, discount, selectedCategories)}/>
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
