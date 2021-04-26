import * as types from './types';
import {maxBy, minBy} from 'csssr-school-utils';
import products from '../../products.json';
import {getCategoriesFromUrl} from '../../utils';

const getAllCategories = () => {
  const categories = products
    .reduce((acc, product) => acc.concat(product.category), []);

  return Array.from(new Set(categories));
}

const initialState = {
  maxPrice: maxBy(obj => obj.price, products).price,
  minPrice: minBy(obj => obj.price, products).price,
  discount: minBy(obj => obj.discount, products).discount,
  selectedCategories: getCategoriesFromUrl() || getAllCategories(),
  categories: getAllCategories(),
  products
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MIN_PRICE:
      return { ...state, minPrice: action.payload };
    case types.CHANGE_MAX_PRICE:
      return { ...state, maxPrice: action.payload };
    case types.CHANGE_DISCOUNT:
      return { ...state, discount: action.payload };
    case types.CHANGE_CATEGORY:
      return { ...state, selectedCategories: action.payload };
    case types.RESET_FILTER:
      return {...initialState};
    default:
      return initialState;
  }
}

export default reducer;
