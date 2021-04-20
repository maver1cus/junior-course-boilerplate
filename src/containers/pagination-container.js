import {connect} from 'react-redux';
import Pagination from '../components/pagination/pagination';
import { getPaginationProducts } from '../utils';
import { changePaginationPage } from '../store/actions';

const mapStateToProps = (state) => {
  const {minPrice, maxPrice, discount, selectedCategories, products, paginationCurrentPage, productsPerPage} = state;
  const productsPages = getPaginationProducts(minPrice, maxPrice, discount, selectedCategories, products, paginationCurrentPage, productsPerPage);

  return  {
    countPages: productsPages.products.length,
    currentPage: +productsPages.currentPage
  }
}

const mapDispatchToProps = (dispatch) => ({
  changePaginationActive: (value) => dispatch(changePaginationPage(value)),
});


const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default PaginationContainer;
