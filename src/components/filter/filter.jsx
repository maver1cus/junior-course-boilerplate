import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Discount from 'csssr-school-input-discount'
import InputWithCaption from '../input-number/input-number';
import logRender from '../log-render/log-render';
import WithInputNumber from '../../hoc/with-input-number/with-input-number';
import FilterCategory from '../filter-category/filter-category';
import Button from '../button/button';
import s from './filter.module.css';
import FilterContext from '../../filter-context';

const InputDiscount = WithInputNumber(Discount);

class Filter extends Component {
  render() {
    return (
      <FilterContext.Consumer>
        {
          ({
             maxPrice,
             minPrice,
             discount,
             categories,
             selectedCategories,
             handleChangeFilterInput,
             handleSelectedCategory,
             handleResetFilters }) => (
              <form>
                <h3 className={s.title}>Цена</h3>
                <div className={s.row}>
                  <InputWithCaption
                    id="min"
                    name="minPrice"
                    value={minPrice}
                    caption="от"
                    type="text"
                    onChange={handleChangeFilterInput}
                  />

                  <InputWithCaption
                    id="max"
                    name="maxPrice"
                    value={maxPrice}
                    caption="до"
                    type="text"
                    onChange={handleChangeFilterInput}
                  />
                </div>
                <div className="s.row">
                  <InputDiscount
                    title="Скидка"
                    name="discount"
                    value={discount}
                    onChange={handleChangeFilterInput}
                  />
                </div>

                <div className={s.row} >
                  <FilterCategory
                    selectedCategories={selectedCategories}
                    categories={categories}
                    handleSelectedCategory={handleSelectedCategory}
                  />
                </div>

                <div className={s.row}>
                  <Button title="Сбросить фильтры" handleResetFilters={handleResetFilters}/>
                </div>
              </form>
          )


        }
      </FilterContext.Consumer>
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
