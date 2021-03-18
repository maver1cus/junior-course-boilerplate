import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputWithCaption from '../input-with-caption/input-with-caption';
import logRender from '../log-render/log-render';
import s from './filter.module.css';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minPrice: this.props.minPrice,
      maxPrice: this.props.maxPrice
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.filtrationProductsInPriceRange(
        this.state.minPrice, this.state.maxPrice
    );
  }

  changeMinPrice = (minPrice) => this.setState({minPrice});

  changeMaxPrice = (maxPrice) => this.setState({maxPrice});

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <h2>Цена</h2>
        <div className={s.row}  >
          <InputWithCaption
            id="min"
            value={this.state.minPrice}
            caption="от"
            type="text"
            onChange={this.changeMinPrice}
          />
          <InputWithCaption
            id="max"
            value={this.state.maxPrice}
            caption="до"
            type="text"
            onChange={this.changeMaxPrice}
          />
        </div>
        <input
          className={s.btn}
          type="submit"
          value="применить"
        />
      </form>
    );
  }
}

Filter.propsType = {
  filtrationProductsInPriceRange: PropTypes.func.isRequired,
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired
}

export default logRender(Filter);
