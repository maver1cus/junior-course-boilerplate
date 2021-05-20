import {connect} from 'react-redux';
import ProductPage from '../pages/product/product'
const mapStateToProps = (state) => {
  const {products} = state.filter;

  return  {
    products
  }
}

const ProductContainer = connect(mapStateToProps)(ProductPage);

export default ProductContainer;
