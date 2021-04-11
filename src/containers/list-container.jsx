import AppContext from '../app-context';
import Products from '../components/products/products';
import React from 'react';

const ListContainer = () => {
  return <AppContext.Consumer>
    {
      ({state}) => {
        const {minPrice, maxPrice, discount, selectedCategories, products} = state;

        const showProducts = products.filter((product) => {
          return product.price >= minPrice &&
            product.price <=maxPrice &&
            product.discount >= discount &&
            selectedCategories.some(category => product.category.indexOf(category) >= 0)
        })

        return <Products products={showProducts} />
      }

    }
  </AppContext.Consumer>
}

export default ListContainer;
