import React from 'react';
import PropTypes from 'prop-types';
import s from '../filter/filter.module.css';

const InputWithCaption = (props) => (
    <>
      <label className={s.label} htmlFor={props.id}>{props.caption}</label>
      <input
        className={s.input}
        type={props.type}
        value={props.value}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
      />
    </>
  )

InputWithCaption.propTypes = {
  id: PropTypes.string.isRequired,
  caption: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputWithCaption;
