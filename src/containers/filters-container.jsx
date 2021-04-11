import React from 'react';
import AppContext from '../app-context';
import {changeDiscount, changeMaxPrice, changeMinPrice, changeCategory, resetFilter} from '../store/actions';
import Filter from '../components/filter/filter';

const FilterContainer = () => {
  return <AppContext.Consumer>
    {({state, dispatch}) => {
      const {minPrice, maxPrice, discount, categories, selectedCategories} = state;

      const handleChangeMinPrice = (value) => {
        dispatch(changeMinPrice(value))
      };

      const handleChangeMaxPrice = (value) => {
        dispatch(changeMaxPrice(value))
      };

      const handleChangeDiscount = (value) => {
        dispatch(changeDiscount(value))
      };

      const handleChangeCategories = (value) => {
        const prevSelectedCategories = selectedCategories;

        const currentSelectedCategories = prevSelectedCategories.includes(value)
          ? prevSelectedCategories.filter(category => category !== value)
          : [...prevSelectedCategories, value]

        const query = (currentSelectedCategories.sort().join('') === selectedCategories.sort().join(''))
          ? '/'
          : `?category=${currentSelectedCategories.join(',')}`;

        window.history.pushState({}, 'title', query);
        dispatch(changeCategory(currentSelectedCategories))
      }

      const handleResetFilter = () => {
        window.history.pushState({}, 'category', '/');
        dispatch(resetFilter())
      };

      return <Filter
        maxPrice={maxPrice}
        minPrice={minPrice}
        discount={discount}
        categories={categories}
        selectedCategories={selectedCategories}
        handleChangeMinPrice={handleChangeMinPrice}
        handleChangeMaxPrice={handleChangeMaxPrice}
        handleChangeDiscount={handleChangeDiscount}
        handleChangeCategories={handleChangeCategories}
        handleResetFilter={handleResetFilter}
      />
    }}
  </AppContext.Consumer>
};

export default FilterContainer;
