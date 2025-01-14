import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logRender from '../log-render/log-render';
import WithInputNumber from '../../hocs/with-input-number/with-input-number';
import CategoriesContainer from '../../containers/categories-container';
import Button from '../button/button';
import Discount from 'csssr-school-input-discount';
import InputWithCaption from '../input-number/input-number';
import s from './filter.module.css';

const InputDiscount = WithInputNumber(Discount);

class Filter extends Component {
  render() {
    const {
      maxPrice,
      minPrice,
      discount,
      handleChangeMinPrice,
      handleChangeMaxPrice,
      handleChangeDiscount
    } = this.props;

    const handleResetFilter = (evt) => {
      evt.preventDefault();
      window.history.pushState({}, 'category', '/');
      this.props.handleResetFilter();
    }

    return (
        <form>
          <h3 className={s.title}>Цена</h3>

          <div className={s.row}>
            <InputWithCaption
              id="min"
              name="minPrice"
              value={minPrice}
              caption="от"
              type="text"
              onChange={handleChangeMinPrice}
            />

            <InputWithCaption
              id="max"
              name="maxPrice"
              value={maxPrice}
              caption="до"
              type="text"
              onChange={handleChangeMaxPrice}
            />
          </div>

          <div className="s.row">
            <InputDiscount
              title="Скидка"
              name="discount"
              value={discount}
              onChange={handleChangeDiscount}
            />
          </div>

          <div className={s.row} >
            <CategoriesContainer />
          </div>

          <div className={s.row}>
            <Button title="Сбросить фильтры" type="reset" handleResetFilter={handleResetFilter}/>
          </div>
        </form>
    );
  }
}

Filter.propsType = {
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  handleChangeFilterInput: PropTypes.func.isRequired,
  handleSelectedCategory: PropTypes.func.isRequired,
  handleResetFilters: PropTypes.func.isRequired
}

export default logRender(Filter);
