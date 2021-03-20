import React from 'react';
import PropTypes from 'prop-types';
import WithInputNumber from '../../hoc/with-input-number/with-input-number';
import s from '../filter/filter.module.css'

const InputNumber = (props) => (
  <>
    <label className={s.label} htmlFor={props.id}>{props.caption}</label>
    <input
      className={s.input}
      id={props.id}
      type={props.type}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
    />
  </>
);

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  caption: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WithInputNumber(InputNumber);
