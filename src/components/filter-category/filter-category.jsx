import React from 'react';
import InputCheckbox from '../input-checkbox/input-checkbox';
import PropTypes from 'prop-types';
import s from './filter-category.module.css';

const FilterCategory = (props) => {
  const isSelectedCategory = (category) => props.selectedCategories.includes(category);

  const handleChangeCategories = (evt) => {
    const {selectedCategories} = props;
    const category = evt.target.value;

    const currentSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(item => item !== category)
      : [...selectedCategories, category]

    const query = (currentSelectedCategories.sort().join('') === selectedCategories.sort().join(''))
      ? '/'
      : `?category=${currentSelectedCategories.join(',')}`;

    window.history.pushState({}, 'title', query);

    props.handleChangeCategories(currentSelectedCategories);
  }

  return (
    <div>
      <h3 className={s.title}>Цена</h3>

      <ul className={s.filters}>
        {
          props.categories.map((category, i) => (
            <li className={s.item} key={i}>
              <InputCheckbox
                title={category}
                isCheck={isSelectedCategory(category)}
                handleChangeCategories={handleChangeCategories}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

FilterCategory.propsType = {
  selectedCategories: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  handleSelectedCategory: PropTypes.func.isRequired
}

export default FilterCategory;
