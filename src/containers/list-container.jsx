import Products from '../components/products/products';
import {connect} from 'react-redux';

const getProductsToShow = ({ minPrice, maxPrice, discount, selectedCategories, products }) => {
  return products.filter((product) => {
    return product.price >= minPrice &&
      product.price <= maxPrice &&
      product.discount >= discount &&
      selectedCategories.some((category) => product.category.indexOf(category) >= 0)
  })
}

const mapStateToProps = (state) => ({products: getProductsToShow(state)})
const ListContainer = connect(mapStateToProps)(Products);

export default ListContainer;
