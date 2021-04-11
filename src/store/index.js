import {createStore} from 'redux';
import {ActionType} from './actions';
import {getCategoriesFromUrl} from '../utils';
import products from '../products.json';
import {maxBy, minBy} from 'csssr-school-utils';

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

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.CHANGE_MIN_PRICE:
      return { ...state, minPrice: action.payload };
    case ActionType.CHANGE_MAX_PRICE:
      return { ...state, maxPrice: action.payload };
    case ActionType.CHANGE_DISCOUNT:
      return { ...state, discount: action.payload };
    case ActionType.CHANGE_CATEGORY:
      return { ...state, selectedCategories: action.payload };
    case ActionType.RESET_FILTER:
      return {...initialState}
    default:
      return state;
  }
}

export default createStore(reducer, initialState);
