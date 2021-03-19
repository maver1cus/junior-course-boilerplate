import React from 'react';
import PropTypes from 'prop-types';
import {toInt} from 'csssr-school-utils'
import s from '../filter/filter.module.css';

const InputWithCaption = (props) => {
  const label = (props.caption)
    ? <label className={s.label} htmlFor={props.id}>{props.caption}</label>
    : '';

  const changeInput = (evt) => {
    evt.preventDefault();
    const price = toInt(evt.target.value) || 0;
    const nameInput = evt.target.name;
    props.onChangeInputValue(price, nameInput);
  }

  return (
    <>
      {label}
      <input
        className={s.input}
        type={props.type}
        value={props.value}
        id={props.id}
        name={props.name}
        onChange={changeInput}
      />
    </>
  );
}

InputWithCaption.propTypes = {
  id: PropTypes.string.isRequired,
  caption: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChangeInputValue: PropTypes.func.isRequired
};

export default InputWithCaption;
