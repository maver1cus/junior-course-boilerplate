import React from 'react';
import PropTypes from 'prop-types';
import {toInt} from 'csssr-school-utils'
import s from '../filter/filter.module.css';

const InputWithCaption = (props) => {
  const label = (props.caption)
    ? <label className={s.label} htmlFor={props.id}>{props.caption}</label>
    : '';

  const handleChange = (evt) => {
    evt.preventDefault();
    const price = toInt(evt.target.value);
    props.onChange(price);
  };

  return (
    <>
      {label}
      <input
        className={s.input}
        type={props.type}
        value={props.value}
        id={props.id}
        onChange={handleChange}
      />
    </>
  );
}

InputWithCaption.propTypes = {
  id: PropTypes.string.isRequired,
  caption: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputWithCaption;
