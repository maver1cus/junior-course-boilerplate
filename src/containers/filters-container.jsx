import {connect} from 'react-redux';
import {filterActions} from '../store/filter';
import Filter from '../components/filter/filter';

const mapStateToProps = ({filter}) => ({
  minPrice: filter.minPrice,
  maxPrice: filter.maxPrice,
  discount: filter.discount,
  selectedCategories: filter.selectedCategories,
  categories: filter.categories
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeMinPrice: (value) => dispatch(filterActions.changeMinPrice(value)),
  handleChangeMaxPrice: (value) => dispatch(filterActions.changeMaxPrice(value)),
  handleChangeDiscount: (value) => dispatch(filterActions.changeDiscount(value)),
  handleResetFilter: () => dispatch(filterActions.resetFilter())
})

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;
