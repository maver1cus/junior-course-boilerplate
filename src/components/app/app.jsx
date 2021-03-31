import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from '../products/products';
import Title from '../title/title';
import Filter from '../filter/filter';
import logRender from '../log-render/log-render';
import { maxBy, minBy } from 'csssr-school-utils';
import FilterContext from '../../filter-context';
import s from './app.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maxPrice: maxBy(obj => obj.price, props.products).price,
      minPrice: minBy(obj => obj.price, props.products).price,
      discount: minBy(obj => obj.discount, props.products).discount,
      selectedCategories: this.getCategoriesFromUrl(),
      categories: this.getAllCategories(props.products)
    }

    this.handleChangeFilterInput = this.handleChangeFilterInput.bind(this);
    this.handleSelectedCategory = this.handleSelectedCategory.bind(this);
    this.handleResetFilters = this.handleResetFilters.bind(this);
  }


  componentDidMount() {
    window.addEventListener('popstate', this.setCategoriesFromHistory);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setCategoriesFromHistory);
  }

  setCategoriesFromHistory = () => {
    this.setState({ selectedCategories: this.getCategoriesFromUrl() });
  }

  handleChangeFilterInput(name, value) {
    this.setState({[name]: value})
  }

  handleSelectedCategory(selectedCategory) {
    const prevSelectedCategories = this.state.selectedCategories;

    const selectedCategories = prevSelectedCategories.includes(selectedCategory)
      ? prevSelectedCategories.filter(category => category !== selectedCategory)
      : [...prevSelectedCategories, selectedCategory]

    this.setState({selectedCategories})

    const query = (selectedCategories.sort().join('') === this.state.categories.sort().join(''))
      ? '/'
      : `?category=${selectedCategories.join(',')}`;

    window.history.pushState({}, 'title', query);
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

  filterProducts = (minPrice, maxPrice, discount, selectedCategories) => {
    return this.props.products
      .filter((product) => {
        return  product.price >= minPrice &&
          product.price <= maxPrice &&
          product.discount >= discount &&
          selectedCategories.some(category => product.category.indexOf(category) >= 0)
      })
  }

  getAllCategories() {
    const categories = this.props.products
      .reduce((acc, product) => acc.concat(product.category), []);

    return Array.from(new Set(categories));
  }

  getCategoriesFromUrl() {
    const url = new URL(window.location.href)

    return url.searchParams.get('category')
      ? url.searchParams.get('category').split(',')
      : this.getAllCategories(this.props.products)
  }

  render() {
    const {minPrice, maxPrice, discount, selectedCategories, categories} = this.state;

    return (
      <FilterContext.Provider value={{
        maxPrice,
        minPrice,
        discount,
        categories,
        selectedCategories,
        handleChangeFilterInput: this.handleChangeFilterInput,
        handleSelectedCategory: this.handleSelectedCategory,
        handleResetFilters: this.handleResetFilters
      }}>
        <div className={s.app}>
          <header className={s.header}><Title /></header>
          <aside className={s.column}>
              <Filter />
          </aside>
          <main>
            <Products products={this.filterProducts(minPrice, maxPrice, discount, selectedCategories)}/>
          </main>
        </div>
      </FilterContext.Provider>
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
