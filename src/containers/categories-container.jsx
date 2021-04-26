import {connect} from 'react-redux';
import FilterCategory from '../components/filter-category/filter-category';
import {filterActions} from '../store/filter';

const mapStateToProps = ({filter}) => ({
  selectedCategories: filter.selectedCategories,
  categories: filter.categories
})

const mapDispatchToProps = (dispatch) => ({
  handleChangeCategories: (value) => dispatch(filterActions.changeCategory(value)),
})

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(FilterCategory);

export default CategoriesContainer;
