import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Discount from 'csssr-school-input-discount'
import InputWithCaption from '../input-number/input-number';
import logRender from '../log-render/log-render';
import WithInputNumber from '../../hoc/with-input-number/with-input-number';
import s from './filter.module.css';

const InputDiscount = WithInputNumber(Discount);

class Filter extends Component {
  render() {
    return (
      <form>
        <h3 className={s.title}>Цена</h3>
        <div className={s.row}  >
          <InputWithCaption
            id="min"
            name="minPrice"
            value={this.props.minPrice}
            caption="от"
            type="text"
            onChange={this.props.handleChangeFilterInput}
          />
          <InputWithCaption
            id="max"
            name="maxPrice"
            value={this.props.maxPrice}
            caption="до"
            type="text"
            onChange={this.props.handleChangeFilterInput}
          />
        </div>
        <div className="s.row">
          <InputDiscount
            title="Скидка"
            name="discount"
            value={this.props.discount}
            onChange={this.props.handleChangeFilterInput}
          />
        </div>
      </form>
    );
  }
}

Filter.propsType = {
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  handleChangeFilterInput: PropTypes.func.isRequired
}

export default logRender(Filter);
