import {connect} from 'react-redux';
import FilterCategory from '../components/filter-category/filter-category';
import {changeCategory} from '../store/actions';

const mapStateToProps = ({categories, selectedCategories}) => ({
  selectedCategories, categories
})

const mapDispatchToProps = (dispatch) => ({
  handleChangeCategories: (value) => dispatch(changeCategory(value)),
})

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(FilterCategory);

export default CategoriesContainer;
