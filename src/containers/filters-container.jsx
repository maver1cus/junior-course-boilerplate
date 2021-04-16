import {connect} from 'react-redux';
import {changeDiscount, changeMaxPrice, changeMinPrice, resetFilter} from '../store/actions';
import Filter from '../components/filter/filter';

const mapStateToProps = ({minPrice, maxPrice, discount, selectedCategories, categories}) => ({
  minPrice, maxPrice, discount, selectedCategories, categories
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeMinPrice: (value) => dispatch(changeMinPrice(value)),
  handleChangeMaxPrice: (value) => dispatch(changeMaxPrice(value)),
  handleChangeDiscount: (value) => dispatch(changeDiscount(value)),
  handleResetFilter: () => dispatch(resetFilter())
})

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;
