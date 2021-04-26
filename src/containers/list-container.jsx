import Products from '../components/products/products';
import {connect} from 'react-redux';
import { getPaginationProducts } from '../utils';

const mapStateToProps = (state) => {
  const { minPrice, maxPrice, discount, selectedCategories, products } = state.filter;
  const { paginationCurrentPage, productsPerPage } = state.pagination;

  const active = getPaginationProducts(
    minPrice,
    maxPrice,
    discount,
    selectedCategories,
    products,
    paginationCurrentPage,
    productsPerPage
  );

  return {
    products: active.products[active.currentPage - 1]
  };
}


const ListContainer = connect(mapStateToProps)(Products);

export default ListContainer;
