import React from 'react';
import PropTypes from 'prop-types';
import s from './input-checkbox.module.css';

const InputCheckbox = (props) => {

  const handleChange = (evt) => {
    const category = evt.target.value;
    props.handleSelectedCategory(category);
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={props.isCheck}
        className={s.checkbox}
        value={props.title}
        onChange={handleChange}
      />

      <span className={s.btn}>
        {props.title}
      </span>
    </label>
  );
};

InputCheckbox.propsType = {
  title: PropTypes.string.isRequired,
  isCheck: PropTypes.bool.isRequired,
  handleSelectedCategory: PropTypes.func.isRequired
}

export default InputCheckbox;
