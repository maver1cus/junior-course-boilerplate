import * as types from './types';
import {getParamFromUrl} from '../../utils';

const PRODUCTS_PER_PAGE = 2;

const initialState = {
  paginationCurrentPage: getParamFromUrl('page') || 1,
  productsPerPage: PRODUCTS_PER_PAGE,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_PAGINATION_PAGE:
      return {...state, paginationCurrentPage: action.payload}
    default:
      return initialState;
  }
}

export default reducer;
