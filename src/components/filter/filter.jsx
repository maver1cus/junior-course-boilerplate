import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputWithCaption from '../input-with-caption/input-with-caption';
import s from './filter.module.css';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.refMinPrice = React.createRef();
    this.refMaxPrice = React.createRef();
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.filtrationProductsInPriceRange(this.refMinPrice.current.value, this.refMaxPrice.current.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <h2>Цена</h2>
        <div className={s.row}  >
          <InputWithCaption id="min" value={this.props.minPrice} caption="от" type="text" reference={this.refMinPrice} />
          <InputWithCaption id="max" value={this.props.maxPrice} caption="до" type="text" reference={this.refMaxPrice} />
        </div>
        <input className={s.btn} type="submit" value="применить" />
      </form>
    );
  }
}

Filter.propsType = {
  filtrationProductsInPriceRange: PropTypes.func.isRequired,
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired
}

export default Filter;